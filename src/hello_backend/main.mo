import Principal "mo:base/Principal";  // Impor modul Principal
import Array "mo:base/Array";           // Impor modul Array

actor SocialFiUser {

    stable var users : [User] = [];  // Stable variable untuk menyimpan daftar user

    type User = {
        id: Principal;
        username: Text;
        bio: Text;
        balance: Nat;
    };

    // Tambah user baru
public func addUser(username: Text, bio: Text) : async Text {
    let callerId = User;
    let newUser : User = {
        id = callerId;
        username = username;
        bio = bio;
        balance = 0;
    };
    users := Array.append(users, [newUser]);
    return "User berhasil ditambahkan.";
};

    // Mendapatkan user berdasarkan Principal ID
    public query func getUser(userId: Principal) : async ?User {
        return Array.find(users, func (u : User) : Bool { u.id == userId });
    };

    // Mendapatkan semua user
    public query func getAllUsers() : async [User] {
        return users;
    };

    // Menambah saldo ke user
    public func addBalance(userId: Principal, amount: Nat) : async Text {
        let optUser = Array.find(users, func (u : User) : Bool { u.id == userId });
        switch (optUser) {
            case (null) return "User tidak ditemukan.";
            case (?user) {
                let updatedUser : User = { user with balance = user.balance + amount };
                users := Array.map(users, func (u : User) : User {
                    if (u.id == userId) {
                        return updatedUser; // Ganti dengan user yang diupdate
                    } else {
                        return u; // Kembali ke user lainnya
                    }
                });
                return "Saldo berhasil ditambahkan.";
            };
        };
    };

    // Transfer saldo antar pengguna
    public func transferBalance(from: Principal, to: Principal, amount: Nat) : async Text {
        let fromUserOpt = Array.find(users, func (u : User) : Bool { u.id == from });
        let toUserOpt = Array.find(users, func (u : User) : Bool { u.id == to });

        switch (fromUserOpt, toUserOpt) {
            case (null, _) return "Pengirim tidak ditemukan.";
            case (_, null) return "Penerima tidak ditemukan.";
            case (?fromUser, ?toUser) {
                if (fromUser.balance < amount) {
                    return "Saldo tidak cukup.";
                };

                // Update saldo dari pengirim dan penerima
                let updatedFromUser : User = { fromUser with balance = fromUser.balance - amount };
                let updatedToUser : User = { toUser with balance = toUser.balance + amount };

                // Ganti array dengan updated user
                users := Array.map(users, func (u : User) : User {
                    if (u.id == from) {
                        return updatedFromUser; // Ganti dengan user pengirim yang diupdate
                    } else if (u.id == to) {
                        return updatedToUser; // Ganti dengan user penerima yang diupdate
                    } else {
                        return u; // Kembali ke user lainnya
                    }
                });

                return "Transfer berhasil.";
            };
        };
    };
}

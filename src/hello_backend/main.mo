import Debug "mo:base/Debug";
import Nat "mo:base/Nat";


// Motoko == Java, TS, JS, C
actor DBank { // Class
  var currentValue = 300; // bisa di reinit
  currentValue := 100;

  let id = 2702382770; // let kyk final, aka gabisa diubah nilainya

  // Debug.print(debug_show(currentValue)); // klo mw print number hrs include "debug_show"

  public func topUp(amount: Nat){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };
  // dfx canister call [dir_name] topUp = cara ngejalanin sbuah function/method

  public func withdrawl(amount: Nat){
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
  }

  // topUp();
}
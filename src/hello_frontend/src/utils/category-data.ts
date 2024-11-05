// src/category/imageData.ts

// Define a type for images
export type Image = {
    id: string;
    url: string;
};

// Static images for each category with unique IDs and URLs
export const imageMap: Record<string, Image[]> = {
    Nature: [
        { id: 'nature-1', url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop&q=80' },
        { id: 'nature-2', url: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=300&h=200&fit=crop&q=80' },
        { id: 'nature-3', url: 'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?w=300&h=200&fit=crop&q=80' },
        { id: 'nature-4', url: 'https://images.unsplash.com/photo-1541423725-e5d7c5a9eec9?w=300&h=200&fit=crop&q=80' },
        { id: 'nature-5', url: 'https://images.unsplash.com/photo-1496482475497-0d70963a74d7?w=300&h=200&fit=crop&q=80' },
        { id: 'nature-6', url: 'https://images.unsplash.com/photo-1517767991206-1e0eacb1c89b?w=300&h=200&fit=crop&q=80' },
        { id: 'nature-7', url: 'https://images.unsplash.com/photo-1517202383675-eb0a6e27775f?w=300&h=200&fit=crop&q=80' },
        { id: 'nature-8', url: 'https://images.unsplash.com/photo-1443996104801-80c82e789b18?w=300&h=200&fit=crop&q=80' },
        { id: 'nature-9', url: 'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1b?w=300&h=200&fit=crop&q=80' },
        { id: 'nature-10', url: 'https://images.unsplash.com/photo-1433477155337-9aea4e790195?w=300&h=200&fit=crop&q=80' },
    ],
    Technology: [
        { id: 'tech-1', url: 'https://images.unsplash.com/photo-1526378720396-0d2a86c4d314?w=300&h=200&fit=crop&q=80' },
        { id: 'tech-2', url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop&q=80' },
        { id: 'tech-3', url: 'https://images.unsplash.com/photo-1581091870620-2b7efb403a38?w=300&h=200&fit=crop&q=80' },
        { id: 'tech-4', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop&q=80' },
        { id: 'tech-5', url: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=300&h=200&fit=crop&q=80' },
        { id: 'tech-6', url: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=300&h=200&fit=crop&q=80' },
        { id: 'tech-7', url: 'https://images.unsplash.com/photo-1587620931058-7aa5c67dffed?w=300&h=200&fit=crop&q=80' },
        { id: 'tech-8', url: 'https://images.unsplash.com/photo-1559163499-413811fb2349?w=300&h=200&fit=crop&q=80' },
        { id: 'tech-9', url: 'https://images.unsplash.com/photo-1537432376769-cd45c994bb9a?w=300&h=200&fit=crop&q=80' },
        { id: 'tech-10', url: 'https://images.unsplash.com/photo-1537433056091-4c8c2702a97d?w=300&h=200&fit=crop&q=80' },
    ],
    Art: [
        { id: 'art-1', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&q=80' },
        { id: 'art-2', url: 'https://images.unsplash.com/photo-1557891189-0d8f047a3628?w=300&h=200&fit=crop&q=80' },
        { id: 'art-3', url: 'https://images.unsplash.com/photo-1529347248741-9ae1844dca5e?w=300&h=200&fit=crop&q=80' },
        { id: 'art-4', url: 'https://images.unsplash.com/photo-1489844097929-c8d5f8bcec67?w=300&h=200&fit=crop&q=80' },
        { id: 'art-5', url: 'https://images.unsplash.com/photo-1528475473458-039d2447b6ea?w=300&h=200&fit=crop&q=80' },
        { id: 'art-6', url: 'https://images.unsplash.com/photo-1517512005277-c23f3615d64d?w=300&h=200&fit=crop&q=80' },
        { id: 'art-7', url: 'https://images.unsplash.com/photo-1578330916609-8f8f4cc89bbd?w=300&h=200&fit=crop&q=80' },
        { id: 'art-8', url: 'https://images.unsplash.com/photo-1574169208507-84376164877c?w=300&h=200&fit=crop&q=80' },
        { id: 'art-9', url: 'https://images.unsplash.com/photo-1482264170981-835a84827b73?w=300&h=200&fit=crop&q=80' },
        { id: 'art-10', url: 'https://images.unsplash.com/photo-1497371126201-6d9313af3a2d?w=300&h=200&fit=crop&q=80' },
    ],
    Travel: [
        { id: 'travel-1', url: 'https://images.unsplash.com/photo-1519682577864-8e4385e8a60c?w=300&h=200&fit=crop&q=80' },
        { id: 'travel-2', url: 'https://images.unsplash.com/photo-1527067669193-6a6d3a5e4ecf?w=300&h=200&fit=crop&q=80' },
        { id: 'travel-3', url: 'https://images.unsplash.com/photo-1533373317747-9d8ffdd42f43?w=300&h=200&fit=crop&q=80' },
        { id: 'travel-4', url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop&q=80' },
        { id: 'travel-5', url: 'https://images.unsplash.com/photo-1478131143081-80f7cd25f7ad?w=300&h=200&fit=crop&q=80' },
        { id: 'travel-6', url: 'https://images.unsplash.com/photo-1499382926326-63b83c9eb4b0?w=300&h=200&fit=crop&q=80' },
        { id: 'travel-7', url: 'https://images.unsplash.com/photo-1516569422646-80f0d4c70d23?w=300&h=200&fit=crop&q=80' },
        { id: 'travel-8', url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&h=200&fit=crop&q=80' },
        { id: 'travel-9', url: 'https://images.unsplash.com/photo-1534829037795-689e7c2e8b1e?w=300&h=200&fit=crop&q=80' },
        { id: 'travel-10', url: 'https://images.unsplash.com/photo-1501588205554-5f8bdda8d911?w=300&h=200&fit=crop&q=80' },
    ],
    Animals: [
        { id: 'animal-1', url: 'https://images.unsplash.com/photo-1542293787937-4b4f0674f949?w=300&h=200&fit=crop&q=80' },
        { id: 'animal-2', url: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=300&h=200&fit=crop&q=80' },
        { id: 'animal-3', url: 'https://images.unsplash.com/photo-1519340333755-46f47c286b29?w=300&h=200&fit=crop&q=80' },
        { id: 'animal-4', url: 'https://images.unsplash.com/photo-1505784901445-23eb4a5b6570?w=300&h=200&fit=crop&q=80' },
        { id: 'animal-5', url: 'https://images.unsplash.com/photo-1550565110-31338d6408e2?w=300&h=200&fit=crop&q=80' },
        { id: 'animal-6', url: 'https://images.unsplash.com/photo-1498575207497-d5f2d59d420b?w=300&h=200&fit=crop&q=80' },
        { id: 'animal-7', url: 'https://images.unsplash.com/photo-1518316847868-9f2e1280db48?w=300&h=200&fit=crop&q=80' },
        { id: 'animal-8', url: 'https://images.unsplash.com/photo-1505809426298-24f7e70e13b3?w=300&h=200&fit=crop&q=80' },
        { id: 'animal-9', url: 'https://images.unsplash.com/photo-1568580239878-5467fdd7a7a6?w=300&h=200&fit=crop&q=80' },
        { id: 'animal-10', url: 'https://images.unsplash.com/photo-1508672023131-4fc803ca097e?w=300&h=200&fit=crop&q=80' },
    ],
};

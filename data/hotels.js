const { v4: uuid } = require('uuid');
const hotels = {
    "data": [{
            id: uuid(),
            name: "Yurt Overlook #4 w/AC and Private Bath (2 Kings)",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/b7a70d63-2cc0-48f7-b430-783c11c2425e.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/a272a276-63b0-4b53-aa11-f808064ecf97.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5987d73b-dd35-4f8e-bcad-13811d6ade65.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7afef86b-0b28-4c3c-9928-d89e605337ce.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/fdb0fcb1-fee6-4cc0-aa62-bb3901b4bd3c.jpg?im_w=720"
            ],
            address: "Orderville, Utah",
            city: "Orderville",
            state: "Utah",
            country: "United States",
            price: "294",
            rating: "4.95",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Yurt Overlook #2 w/AC and Private Bath(King Suite)",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/31acfd9e-f5bb-474b-b61c-11827a75cfa2.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/e2e7ba92-9044-4de8-b0b6-c33536192a65.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f8e7826e-0f47-4bdd-9061-3367bb46c6e2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4890fd56-04ae-45b8-9c16-784268c50ca8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/210b89aa-a934-4763-ad0f-63690da23196.jpg?im_w=720"
            ],
            address: "Orderville, Utah",
            city: "Orderville",
            state: "Utah",
            country: "United States",
            price: "277",
            rating: "4.99",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Beautiful Luxury Yurt bordering on Flathead Lake",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/3b05948d-2751-4b19-b737-e6fefd881aef.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-17697694/original/1934b3cf-6358-4aae-975c-f8375cc19ee6.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-17697694/original/f73e101e-98f1-40e3-8532-9269900c7e1a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-17697694/original/aed8ddaa-a448-4771-b384-1c1ccb97c349.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/595742e6-b0b6-41c3-bc65-0c7d650d3d9d.jpg?im_w=720"
            ],
            address: "Somers, Montana",
            city: "Somers",
            state: "Montana",
            country: "United States",
            price: "220",
            rating: "4.99",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "WILD+WANDER Luxury Yurt near Bozeman, Montana",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-669027516835493022/original/42761331-52de-4867-b85c-659b2631ac2b.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-669027516835493022/original/1b2c47b7-0017-4dc3-a813-f5c8c5a0332c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-669027516835493022/original/a1b57af7-40d2-4d2f-85f6-dc4bc3c2077e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-669027516835493022/original/646ab1d4-45a8-4a2b-b33e-9344e459141e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-669027516835493022/original/92e643ee-d4bd-4c12-947f-86e695b527ed.jpeg?im_w=720"
            ],
            address: "Bozeman, Montana",
            city: "Bozeman",
            state: "Montana",
            country: "United States",
            price: "321",
            rating: "5.0",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "THE HIPPIE SHACK YURT&Tiny house @ PACHAMAMA FARM",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/2c449a51-bf83-4aea-926b-5103456b95e0.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-34208383/original/39d36409-b2eb-4021-a2a1-75d312afd842.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/00ff61bd-daa6-4aa1-a808-4dcd49ce8372.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-34208383/original/586c0047-993c-4758-ae4f-d71f1f22a69d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-34208383/original/ac8bcd59-0dcd-44a7-b297-6b5d3b581de6.jpeg?im_w=720"
            ],
            address: "Days Creek, Oregon",
            city: "Days Creek",
            state: "Oregon",
            country: "United States",
            price: "120",
            rating: "4.91",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "High Desert Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/dc91997f-98b5-4463-bf7f-840ed21f95a8.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/adaa9613-d129-41e7-98b7-8592aac24ca0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-711521787093802341/original/65db7cf3-3aa7-43bb-b476-e83d54cb8bd2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-711521787093802341/original/16355fac-9c4e-41f4-8d51-cf71bacb3819.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-711521787093802341/original/e0f24584-ee34-4088-a583-013f08819f68.jpeg?im_w=720"
            ],
            address: "Grand Junction, Colorado",
            city: "Grand Junction",
            state: "Colorado",
            country: "United States",
            price: "112",
            rating: "4.9",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Unaweep Base Camp",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-960883339066850093/original/7c8809b4-7e13-4f60-ab09-463b2ffe30dc.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-960883339066850093/original/ae97a242-cbe7-4596-9312-3b9ee805d16a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-960883339066850093/original/70e0c947-0430-4a24-8a3a-9d5cf26c7868.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-960883339066850093/original/8eac3f75-efd1-4bf5-ac99-dee076eed95c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-960883339066850093/original/59bed38e-4e3d-41a9-a7ae-9872703c0679.jpeg?im_w=720"
            ],
            address: "Gateway, Colorado",
            city: "Gateway",
            state: "Colorado",
            country: "United States",
            price: "130",
            rating: "New",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Sunset Yurt \u2013 stunning infinity pool",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-17944878/original/5e59e27b-b0f5-461e-a383-1a653f7f5f97.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-17944878/original/8823ea59-185f-4ca1-9a6f-a73b4d678c83.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-17944878/original/efa4e2a0-c4b3-4417-8606-2fa77ea02e30.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-17944878/original/e9e267e2-4fb9-4a1e-b497-a1092322cefd.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/8a96fd25-658b-4ea3-8be6-7d0e0fd2bc5e.jpg?im_w=720"
            ],
            address: "Garden Valley, California",
            city: "Garden Valley",
            state: "California",
            country: "United States",
            price: "175",
            rating: "4.9",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "\u2b50 Northern Montana Yurt\u2022 Fire place\u2022  \u2b50",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/0b21f357-a9dd-4349-a531-98b0da6734c6.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-24675134/original/d27c3373-294d-42f8-bc48-784bc77872e3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/04761195-65c7-4f1f-8733-7fd3662f7380.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-24675134/original/c547b4de-66a6-4f80-b97b-c7b1adb0e893.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/12e2fcca-0e1f-4b0e-a002-6e56f2d5bbd8.jpg?im_w=720"
            ],
            address: "Saint Regis, Montana",
            city: "Saint Regis",
            state: "Montana",
            country: "United States",
            price: "149",
            rating: "4.93",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Treetop #1 at East Zion Resort",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/a85acd47-7658-4636-b1ce-b52903722499.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/90c4573e-b016-478b-9ccc-5534cb9de7e0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6e6c8e7c-82b2-4a21-bee2-665214364368.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9244ef24-24d2-486d-9ef9-6a62886e2a68.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/41de3c69-e654-405b-aa7f-093c373fbcb0.jpg?im_w=720"
            ],
            address: "Orderville, Utah",
            city: "Orderville",
            state: "Utah",
            country: "United States",
            price: "138",
            rating: "4.93",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Ponderosa Yurt - infinity pool/outdoor soaking tub",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/f440ef0d-6b96-4a7c-bf77-99cd0eb70865.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-35039486/original/bbcf62a5-fc77-4982-bbc4-4af630213aa9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-35039486/original/7c884819-8a18-4a78-afd7-b8dff7ceca34.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-35039486/original/cfe7f7ef-0cab-4c42-b87d-33b926f47a2b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/760bb780-94b1-467f-8b04-6611ca596c0a.jpg?im_w=720"
            ],
            address: "Garden Valley, California",
            city: "Garden Valley",
            state: "California",
            country: "United States",
            price: "175",
            rating: "4.79",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "The 36th Street Urban Yurt, in Large Garden Oasis",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/02badde8-33a7-494c-b06b-9808195562a8.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-14837261/original/3bc01b9b-4d79-4b97-b8d4-a37080e5f163.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-14837261/original/c2f93314-f01a-4bc3-a952-911d3e4fa487.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-14837261/original/d57e535d-5655-498b-8a95-4989815c9b86.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-14837261/original/81c04bf8-9a64-4f1d-9099-326e7960db4a.jpeg?im_w=720"
            ],
            address: "Boise, Idaho",
            city: "Boise",
            state: "Idaho",
            country: "United States",
            price: "74",
            rating: "4.84",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Treetop #3 at East Zion Resort",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/8e987dc0-566e-4c3e-9c6c-bc77f435adf8.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/0709d41a-bb00-4e64-8970-c74e840b5747.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6b8fb1e1-86b9-4e84-93c5-e9e9a49ed8d1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/aa8e2af4-3ff0-49df-bc30-ef678bdf885a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/466e2d34-22d3-497b-bbdc-514ff1521026.jpg?im_w=720"
            ],
            address: "Orderville, Utah",
            city: "Orderville",
            state: "Utah",
            country: "United States",
            price: "155",
            rating: "4.94",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Tranquil  Glamping Yurt Near Eugene",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/faa8272b-fdb3-4de5-9bc3-bb41e1b7dc3f.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/809a0df6-fdc4-4762-b58b-e0e9654b3f11.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/45ca7c63-2cb4-436d-b133-505b0db63227.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d1605fda-e8b1-4027-b9a4-9812ce119aba.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d4e678f5-a59a-4c4f-ac1e-dad8d9b24f77.jpg?im_w=720"
            ],
            address: "Springfield, Oregon",
            city: "Springfield",
            state: "Oregon",
            country: "United States",
            price: "73",
            rating: "4.89",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Forest Yurt Nature Retreat on Whidbey Island",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/be8cc14d-8fab-4fc0-8bce-88649e0f04cf.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/58e5b89b-38de-4caf-9519-f61cd66bfd1b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/fcb2441f-db00-4738-b7db-83342565947e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c02123c9-d57e-4e3b-b019-b439157496d2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d4c875c5-d55d-4a66-9167-6522e4e16639.jpg?im_w=720"
            ],
            address: "Clinton, Washington",
            city: "Clinton",
            state: "Washington",
            country: "United States",
            price: "104",
            rating: "4.93",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Yosemite Shuteye, a most romantic getaway...",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/5ccd59ab-47d9-471d-af28-6687d472eaa5.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/243872ab-d35a-447b-b6c7-3105003b4680.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-23670144/original/fffc314d-983e-4595-a948-8bc1548fabeb.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-23670144/original/0a71ec26-e157-467f-8fcc-a6d701ed8325.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/fee8c154-2eea-4691-a23c-a18b629beb86.jpg?im_w=720"
            ],
            address: "Oakhurst, California",
            city: "Oakhurst",
            state: "California",
            country: "United States",
            price: "149",
            rating: "4.98",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Paisley Paradise Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/00d85f08-0f8d-4ba7-a0bf-6368ea5aee7c.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/3f0bcf2e-704d-4626-9593-a6eb47b07108.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/12c31327-ae37-4e74-b9f9-7ee2b5902747.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2da4c21a-0263-4892-a187-403e999b127e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3c3ff40f-a540-443b-800c-1b4bbf51a73a.jpg?im_w=720"
            ],
            address: "Roy, Washington",
            city: "Roy",
            state: "Washington",
            country: "United States",
            price: "95",
            rating: "4.93",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Riverview Yurt with private geothermal hotpool",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/c1d0d4ec-239a-4bcf-93e4-1fca68d3a0d7.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/64fc0025-f66f-4e7c-8134-da3d5ac6fd0c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-46831469/original/6c109b01-65a6-4fc6-b375-8560057f6e16.png?im_w=720",
                "https://a0.muscache.com/im/pictures/caee6842-5a6b-4f2b-a481-9ec8c30c50e1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/804e107b-dacf-4d60-9bdc-5a7693092267.jpg?im_w=720"
            ],
            address: "Buhl, Idaho",
            city: "Buhl",
            state: "Idaho",
            country: "United States",
            price: "160",
            rating: "4.99",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Yurt - Okanagan Glamping Co.",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-593567280628572650/original/debf843b-978b-4c4f-99e1-cd01e343ac5e.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-593567280628572650/original/affbdee0-b994-4306-a17d-9b917ef8d158.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-593567280628572650/original/3c8df75e-0b34-465f-a463-37ed801795d9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-593567280628572650/original/876fa12a-4a5c-45d7-8ea4-e7805a7e5cda.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-593567280628572650/original/477c3278-7033-4c66-8ad7-d71fe905009b.jpeg?im_w=720"
            ],
            address: "Vernon, Canada",
            city: "Vernon",
            state: "Canada",
            country: "United States",
            price: "161",
            rating: "4.97",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Flying Frog Yurt w/Mountain View (Easy Checkout!)",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-47509248/original/383f595a-4796-4707-a4f2-fff1fd2a9cfd.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/79ca315f-cd5c-43df-8a76-b0b18ea8b1dc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5ceefba9-f18f-4458-ab75-2952c7d0f080.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47509248/original/2a0ab17c-bac1-415b-a5fc-a5247ad39d1b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-47509248/original/4d8f7ab7-fd92-4b12-84f8-094a40fa8686.jpeg?im_w=720"
            ],
            address: "Gresham, Oregon",
            city: "Gresham",
            state: "Oregon",
            country: "United States",
            price: "119",
            rating: "4.98",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Retreat on the Willamette River",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/4af720ff-775f-4a9b-a314-53195b037fb1.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/22594218/ccbc3ec8_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/22197623/4e51449d_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f44585d8-b823-4880-b918-dce9060e451f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5817d949-6350-4a8c-9edc-d04007d31f10.jpg?im_w=720"
            ],
            address: "Eugene, Oregon",
            city: "Eugene",
            state: "Oregon",
            country: "United States",
            price: "58",
            rating: "4.82",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Vibrant and unique yurt - Welcome to Madrona Grove",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-651656778532694188/original/7e950394-4bc3-4e9f-9a68-bf8de3f69831.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-651656778532694188/original/48d8d8e1-21a5-4a75-8963-6ea0be4b1374.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-651656778532694188/original/5b75acbd-b8ed-46bf-8dfc-35bc15eeead3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-651656778532694188/original/45885e6a-56fe-4fbc-a81a-5cc3cdfda706.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-651656778532694188/original/89d08915-a3d6-46cb-9018-39ab4508bd60.jpeg?im_w=720"
            ],
            address: "Sequim, Washington",
            city: "Sequim",
            state: "Washington",
            country: "United States",
            price: "166",
            rating: "4.9",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Mountain View Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-53458593/original/f11a4297-4612-4e84-83d0-7448cd3d42c9.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/c9a732de-a102-43c0-806a-e699f6426d42.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53458593/original/f2ce4714-ab92-4f4b-abc1-675a11dfd126.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/1ea2cffc-9a3f-4a7a-a9d5-44bc0bc26c60.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53458593/original/957b8353-65e7-4d77-8bc9-a48a9f811c4e.jpeg?im_w=720"
            ],
            address: "Victor, Montana",
            city: "Victor",
            state: "Montana",
            country: "United States",
            price: "81",
            rating: "4.98",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Yurt Meadow Retreat - on farm by nature park",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/53b6d30c-6739-4889-af62-39a9e3616680.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/dc4163b5-3726-40d9-878e-4720a3006387.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/41a6e52e-bda0-4f97-adb5-c80e1bc088a4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c27171b0-9bb4-4a60-b78d-0bc833b7ab08.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/50c4d623-8e00-4468-b056-cd5ce1791c67.jpg?im_w=720"
            ],
            address: "Portland, Oregon",
            city: "Portland",
            state: "Oregon",
            country: "United States",
            price: "70",
            rating: "4.92",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Montana Bunkhouse Cabin Right on The River",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-14385441/original/a08e428e-5a95-401b-80d0-377007809c78.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/eda1232d-9a0f-488d-bf2f-286663eea80e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-14385441/original/cb8d0421-cfb9-44d8-8d0d-c28ea24ac37f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-14385441/original/f5242aee-9aa8-4331-a4a9-8d15f76818a2.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-14385441/original/c837cd23-ba30-4669-9f80-686793c3081f.jpeg?im_w=720"
            ],
            address: "Troy, Montana",
            city: "Troy",
            state: "Montana",
            country: "United States",
            price: "95",
            rating: "4.99",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Myrtle's Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-911006145051734908/original/e33a5bae-3ad4-4cb4-b466-ee0adb83a321.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-911006145051734908/original/836fad1d-4a22-474f-bd76-dca64f6ab721.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-911006145051734908/original/e8ea216a-1a4f-479e-908e-cb192fa5c50a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-911006145051734908/original/9fc5143c-b2d3-4120-910a-907c1477d4f1.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-911006145051734908/original/164256ab-4d03-4931-a527-bd227a70d3f1.jpeg?im_w=720"
            ],
            address: "Chiloquin, Oregon",
            city: "Chiloquin",
            state: "Oregon",
            country: "United States",
            price: "135",
            rating: "4.88",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Camp Earnest Queen Yurt in Twain Harte",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-629817824557185384/original/3c04f79b-0e2c-4c25-8a6d-28d5ca38334a.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-629817824557185384/original/40300ffb-180e-4bf2-8a95-2a9eae702f8d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-629817824557185384/original/0a1c09e7-26ff-4f30-8051-df547ae03ed0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-629817824557185384/original/f36908ae-970b-4a8c-a7e9-2a1ad2029af3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-629817824557185384/original/47b5b127-f68e-4c62-bd19-7dbe40e557d5.jpeg?im_w=720"
            ],
            address: "Twain Harte, California",
            city: "Twain Harte",
            state: "California",
            country: "United States",
            price: "99",
            rating: "4.88",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Stanwood Resorts",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-52983762/original/b2691e77-cc5b-4ea0-9e19-129aab0b955f.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-629817824557185384/original/40300ffb-180e-4bf2-8a95-2a9eae702f8d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-629817824557185384/original/0a1c09e7-26ff-4f30-8051-df547ae03ed0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-629817824557185384/original/f36908ae-970b-4a8c-a7e9-2a1ad2029af3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-629817824557185384/original/47b5b127-f68e-4c62-bd19-7dbe40e557d5.jpeg?im_w=720"
            ],
            address: "Stanwood, Washington",
            city: "Stanwood",
            state: "Washington",
            country: "United States",
            price: "211",
            rating: "4.98",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "The Yurt at Cluster Flock Farms",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/bc55f780-875c-44f6-99da-54deb7577540.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/e67c6873-0b07-490c-a3a3-9b2f19c98232.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/21a3fe3f-4f7c-457d-bdbb-ef836b6f518d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/98946b87-b4b9-45f1-ae2b-8eec435e59a9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3eb28276-0094-4cfd-9ce9-5ab4262014d3.jpg?im_w=720"
            ],
            address: "White Salmon, Washington",
            city: "White Salmon",
            state: "Washington",
            country: "United States",
            price: "96",
            rating: "4.86",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Authentic, amazing PNW glamping experience!",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/6a9e99cc-d94c-4105-b44b-d439975b717c.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/07deeacf-6ac9-4efb-9251-6f01f80e2b24.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/111efe2f-f159-4145-bf8f-28f627ba0bbb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c1de08fb-181a-4c2e-bd8f-fa498b54c4ee.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0a5b3505-9e57-4511-8799-cd75d0f8557e.jpg?im_w=720"
            ],
            address: "Vashon, Washington",
            city: "Vashon",
            state: "Washington",
            country: "United States",
            price: "125",
            rating: "4.9",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Rock House Yurt in the woods",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/40017275-6b54-49d1-81e9-bbf028901c69.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/030bf108-37ad-4ca8-bb10-d33c72238464.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/452ce009-fc5c-45f8-bc44-0589ee217c27.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/633f8e0d-632e-4ccb-be33-49c27bcd3e7d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/831f7563-5a1f-4065-92e1-44c330999d5f.jpg?im_w=720"
            ],
            address: "Oroville, California",
            city: "Oroville",
            state: "California",
            country: "United States",
            price: "52",
            rating: "4.8",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Yurt Glamping, Mtn bike trail, Disc golf course!",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-645822126707243847/original/3a63ca36-19e9-488a-99e0-fdf5e544830d.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-645822126707243847/original/59e5eac8-3bdd-4f32-a19d-4775ce17038a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-645822126707243847/original/3c6fa391-a5b2-48da-94bd-2ede0316cd6a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-645822126707243847/original/552fe75f-362a-4523-94a2-95261d543136.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-645822126707243847/original/8ce85802-56cb-4f18-895b-81d785e221f9.jpeg?im_w=720"
            ],
            address: "Milburn, Utah",
            city: "Milburn",
            state: "Utah",
            country: "United States",
            price: "115",
            rating: "4.91",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Two Ravens Yurt: Modern, Romantic, Eco-Friendly",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/ed2d6699-48dd-43d6-bf59-ddf843002f60.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/a7900a0e-a6aa-4dba-921e-679f501bd349.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d94c6d72-b61a-406f-9d6c-d72fea6d6805.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f2001e09-b1e2-4d59-841d-c4c1cbb530da.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1c2de3e7-95a1-4de2-928d-52e380ea58e0.jpg?im_w=720"
            ],
            address: "Golden, Canada",
            city: "Golden",
            state: "Canada",
            country: "United States",
            price: "125",
            rating: "4.99",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "R&R King Suite",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/c947fe12-182a-4dd4-b5c9-3b56c25b6995.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/f0fad4e0-911d-4763-ba4a-827bcde02e9b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/31ed4413-9e11-4475-9d1d-360c08ef9b41.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b2896d5f-96ea-4f1e-b453-2b55fa95f4d3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1d7b976b-7fb4-46be-83ba-15ef65a4a94d.jpg?im_w=720"
            ],
            address: "Lowman, Idaho",
            city: "Lowman",
            state: "Idaho",
            country: "United States",
            price: "81",
            rating: "4.8",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Magpie Springs Yurtship",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-39302912/original/05de9b18-5689-4d66-963a-58f463e238ba.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-39302912/original/91fed77e-0f68-4288-a905-4b64156bf65d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-39302912/original/cd8e31d1-8e0a-4ece-ad32-76aa95692b35.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/1aa089f0-2f65-4693-ab79-cc0d83c85f77.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5ada1c27-abd9-47a9-9d72-17e8f19789a0.jpg?im_w=720"
            ],
            address: "Dillon, Montana",
            city: "Dillon",
            state: "Montana",
            country: "United States",
            price: "60",
            rating: "4.98",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Camp Earnest King Yurt in Twain Harte",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-629808186437102897/original/c791c12d-9300-4419-ad6e-f20faefca77d.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-629808186437102897/original/14a0f994-d199-4050-9622-f2d897bc99b3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-629808186437102897/original/b22b7321-8093-4bb0-9895-b6092ce3dbc3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-629808186437102897/original/8dc19f71-5f1e-4722-a74d-b7cd9b42c84c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-629808186437102897/original/f4be612d-198d-428d-a958-a793d8759176.jpeg?im_w=720"
            ],
            address: "Twain Harte, California",
            city: "Twain Harte",
            state: "California",
            country: "United States",
            price: "99",
            rating: "4.86",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "She Dances in Moonlight Yurt up Rock Creek",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/db3c600b-9a33-4655-b9d6-0d60120e246d.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/cab42fc6-b2fd-4659-8288-0018e99899a1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/547ca041-cc63-406f-a557-1838d2ecef5e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/870f26b9-5d67-4a41-9804-619301bc02d0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/144d20bf-8c1d-47f0-8906-d94a984e35ae.jpg?im_w=720"
            ],
            address: "Clinton, Montana",
            city: "Clinton",
            state: "Montana",
            country: "United States",
            price: "89",
            rating: "4.98",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "26' Yurt Cozy Glamping Getaway!",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/e928af0c-c1d7-42ee-a176-b798e9f452bf.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/34f44a19-c266-4119-8664-c7501a7d6719.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/36dd8fe2-a589-4729-8984-71be04a46962.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ffde9fb4-2b5b-44b8-968a-c72d4e5c106a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f5e0c4a2-f628-4f48-867e-1786828db46e.jpg?im_w=720"
            ],
            address: "Cedar City, Utah",
            city: "Cedar City",
            state: "Utah",
            country: "United States",
            price: "69",
            rating: "4.77",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Camp Earnest King Yurt in Twain Harte",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-629808186437102897/original/c791c12d-9300-4419-ad6e-f20faefca77d.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-629808186437102897/original/14a0f994-d199-4050-9622-f2d897bc99b3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-629808186437102897/original/b22b7321-8093-4bb0-9895-b6092ce3dbc3.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-629808186437102897/original/8dc19f71-5f1e-4722-a74d-b7cd9b42c84c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-629808186437102897/original/f4be612d-198d-428d-a958-a793d8759176.jpeg?im_w=720"
            ],
            address: "Twain Harte, California",
            city: "Twain Harte",
            state: "California",
            country: "United States",
            price: "99",
            rating: "4.86",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "She Dances in Moonlight Yurt up Rock Creek",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/db3c600b-9a33-4655-b9d6-0d60120e246d.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/cab42fc6-b2fd-4659-8288-0018e99899a1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/547ca041-cc63-406f-a557-1838d2ecef5e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/870f26b9-5d67-4a41-9804-619301bc02d0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/144d20bf-8c1d-47f0-8906-d94a984e35ae.jpg?im_w=720"
            ],
            address: "Clinton, Montana",
            city: "Clinton",
            state: "Montana",
            country: "United States",
            price: "89",
            rating: "4.98",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "26' Yurt Cozy Glamping Getaway!",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/e928af0c-c1d7-42ee-a176-b798e9f452bf.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/34f44a19-c266-4119-8664-c7501a7d6719.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/36dd8fe2-a589-4729-8984-71be04a46962.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ffde9fb4-2b5b-44b8-968a-c72d4e5c106a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f5e0c4a2-f628-4f48-867e-1786828db46e.jpg?im_w=720"
            ],
            address: "Cedar City, Utah",
            city: "Cedar City",
            state: "Utah",
            country: "United States",
            price: "69",
            rating: "4.77",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Wildedge Ranch Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-770968997359978589/original/a2510c11-9486-449a-be4b-36700689b16f.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-770968997359978589/original/cb5418b9-3d86-497a-8831-fc34bab38437.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-770968997359978589/original/6b829d41-8fac-498a-a5eb-95f3d4a86f82.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-770968997359978589/original/12697a0d-cc60-4087-b61c-66263395d28a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-770968997359978589/original/885c2ce0-5d77-4da3-a9bf-d92046810048.jpeg?im_w=720"
            ],
            address: "Garden Valley, Idaho",
            city: "Garden Valley",
            state: "Idaho",
            country: "United States",
            price: "56",
            rating: "4.97",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Camp Caribou Guest Yurt - 10min from Glacier NP!",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/86a9a03a-14bb-4337-9966-4feedd515bb8.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/ef4b0077-ab08-4d9d-9698-901331404147.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3613bd67-b583-4f7e-bbcf-eccbce493b72.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/99baed93-648d-4f14-b9ab-fa12103f31a1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b525bbc4-51ab-4b78-947e-59a4c9fb5251.jpg?im_w=720"
            ],
            address: "Coram, Montana",
            city: "Coram",
            state: "Montana",
            country: "United States",
            price: "189",
            rating: "4.98",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Unique Luxury Grain Bin called the Happy Place",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/6c5bf06a-9df1-4549-9c83-0f6524cbfde3.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/39b503a9-cb9d-4d31-a333-f3f51b7fab97.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/47126dc8-06d5-4356-9441-aebcc6fff40f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/066b9447-5e89-4044-8a81-304e6f8534dc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0e873a50-3509-4de1-8083-2dbd58ad0bf0.jpg?im_w=720"
            ],
            address: "Ronan, Montana",
            city: "Ronan",
            state: "Montana",
            country: "United States",
            price: "80",
            rating: "4.97",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Yurtle Turtle  Island Getaway",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/52d4fd9c-c6fc-41d0-b521-201068cd72d7.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-768248700081133087/original/1f3c4fd4-a298-4e89-8221-6df20a575e30.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/6cf011c0-e1f6-474b-9e34-705a08ff2c17.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-768248700081133087/original/63dacd60-c621-47cc-9973-81cd0ac3504e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-768248700081133087/original/11e2af51-e092-497b-a93c-ec5716b7326c.jpeg?im_w=720"
            ],
            address: "Camano, Washington",
            city: "Camano",
            state: "Washington",
            country: "United States",
            price: "87",
            rating: "4.87",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Prism Mongolian Yurt with Cedar Hot Tub",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/f716a5a8-bc40-4663-8172-b080f8a53129.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/ea438c25-4664-49bd-addf-974a91b849fe.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-892263919214729843/original/b1d27bcc-8e4d-4bda-9e2f-7f82fbafab16.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/591efa06-2291-454d-bb9a-f4cf0d32d6bd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-892263919214729843/original/0ee87f11-7679-43de-b5e1-be3d81263a8f.jpeg?im_w=720"
            ],
            address: "Buckley, Washington",
            city: "Buckley",
            state: "Washington",
            country: "United States",
            price: "79",
            rating: "5.0",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Sanctuary Farm Yurt Glamping with Breakfast",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/071c7ae3-a091-405f-a6c9-abff3974c648.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/9ac8d3b5-136e-433e-a2fd-49e28d204c9a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3b174fca-b5d4-4ebc-a078-2d1afb746fe4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1714440d-66ae-48ac-b818-d106433e56f2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/094032ce-6680-4bf8-af06-fb08d81799a3.jpg?im_w=720"
            ],
            address: "Alberton, Montana",
            city: "Alberton",
            state: "Montana",
            country: "United States",
            price: "107",
            rating: "4.94",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Magical retreat: off-grid on 10 acres",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/6e2bced9-41e1-442e-9e3c-fd9990205d9d.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/562d2c41-1084-4d37-9f02-432f6674e233.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/598f9282-8221-4551-8567-fad5659f447b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/1eda5b8c-b65f-4164-9bb5-11ab63843d00.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/70d1ee9d-53f2-42ee-b789-9b83a87911f2.jpg?im_w=720"
            ],
            address: "Nevada City, California",
            city: "Nevada City",
            state: "California",
            country: "United States",
            price: "185",
            rating: "4.9",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "White Salmon Yurt Getaway",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/b4f9ea55-546f-4a11-b52c-421fdec90ade.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/airflow/Hosting-49691344/original/3057a569-f23b-45c5-b272-4aaf6aa29164.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-49691344/original/0570eed6-1ede-4c3f-91c1-e8e0afb11bdb.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-49691344/original/5efb3b49-c2a9-460b-b0c4-2cecac854293.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/airflow/Hosting-49691344/original/07ad17b0-c9e0-4cb4-a7d6-44a7601ab828.jpg?im_w=720"
            ],
            address: "White Salmon, Washington",
            city: "White Salmon",
            state: "Washington",
            country: "United States",
            price: "204",
            rating: "4.99",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Cozy yurt getaway - 16' and 20'",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-891298470628500049/original/8321c367-84c7-4215-8a69-18670a65bb42.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-891298470628500049/original/594f7cd5-6f69-4bdf-b5dc-2b22bd9b27c9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-891298470628500049/original/bcf37076-e8a6-43aa-917e-9aabf11d024e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-891298470628500049/original/3a7f5a0f-de4e-44a2-9dd5-bd9295f938bf.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-891298470628500049/original/35bf42dc-93a5-4224-b152-11c9fd1aa84e.jpeg?im_w=720"
            ],
            address: "Pleasant Hill, Oregon",
            city: "Pleasant Hill",
            state: "Oregon",
            country: "United States",
            price: "200",
            rating: "5.0",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Countryside Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-917705126228415358/original/c45c9d41-4cbd-4072-bdd2-90c4bbaeea39.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/e3069c5f-ca5c-4b31-a167-3a81c3dc9bed.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/76c96ea0-5e0e-4e6f-b183-a4871680cab6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-917705126228415358/original/93a721c3-0f3c-47bc-94c5-8c50b7c58754.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/54505039-13e4-4537-bd69-f465c853f880.jpg?im_w=720"
            ],
            address: "Pincher Creek No. 9, Canada",
            city: "Pincher Creek No. 9",
            state: "Canada",
            country: "United States",
            price: "144",
            rating: "4.9",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Heart Yurt - artisan made with cedar hot tub",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-961661687102034735/original/9d15bd35-725e-4c51-96e4-9108681d7507.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-961661687102034735/original/e9d0f7a3-81bc-4f04-9551-936c9173125b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-961661687102034735/original/66cab60b-acd0-459f-ba26-22cb283a3bb4.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-961661687102034735/original/0005ebbe-7ca6-431d-a057-071b52ab81af.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-961661687102034735/original/ca7cb1a6-4b0d-45bb-a87c-70001084d9b9.jpeg?im_w=720"
            ],
            address: "Buckley, Washington",
            city: "Buckley",
            state: "Washington",
            country: "United States",
            price: "99",
            rating: "New",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Enchanting 22-Foot Mongolian Yurt in the Woods",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/782691b1-6ed5-4d3c-b19a-2937ffd169a8.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/6295b4dd-24b3-48e5-b39b-b35960cbc1c4.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/68a220c6-d85a-4f3c-9917-5c9e53f54d54.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-51129650/original/f6a56b89-8050-4b14-a358-ad5cbfc722ca.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-51129650/original/9a0a3f2e-6972-42f5-a7df-0dac462f3ccf.jpeg?im_w=720"
            ],
            address: "Weed, California",
            city: "Weed",
            state: "California",
            country: "United States",
            price: "195",
            rating: "4.96",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Lupine Yurt of the Potomac Valley",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/265a2fb9-b558-4860-b177-b7393a65b2d7.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/4a566ca2-8ef5-4adf-9fd8-20475459be65.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6d34b644-9f80-43cc-a4fe-da95dbd47ce1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ad9b9a3e-1781-4dee-96de-722b1a4baf4e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/da9825b1-5797-4c44-a667-4234c45462f5.jpg?im_w=720"
            ],
            address: "Missoula County, Montana",
            city: "Missoula County",
            state: "Montana",
            country: "United States",
            price: "131",
            rating: "4.95",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "JJR Private Yurt with full bathroom, mountain",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-892953664621254624/original/86b5d108-0464-4f41-b3a3-eb5c53501d8d.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-892953664621254624/original/bce78626-c226-4207-9cf9-33d51012d1ac.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-892953664621254624/original/5159effc-1faf-4be0-b1cc-37af96840301.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-892953664621254624/original/6db3ed0b-2228-4a2a-89cc-3ebf0356ecbe.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-892953664621254624/original/a446cef3-804a-404c-9425-9929d79be485.jpeg?im_w=720"
            ],
            address: "Sisters, Oregon",
            city: "Sisters",
            state: "Oregon",
            country: "United States",
            price: "94",
            rating: "4.83",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Kicking Horse Yurt with Hot Tub & Epic Views!",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/c366f35b-6baa-4c1e-9aa3-0f8728d56758.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/5e99b286-f91e-409f-a29f-2e4d42aafbae.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/500be4be-0ea7-4a27-a446-b2d37ff04ff9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/008b1013-2fe2-4692-8c25-9f57f9746992.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a92635be-39cc-4125-b035-8697db0baa32.jpg?im_w=720"
            ],
            address: "Golden, Canada",
            city: "Golden",
            state: "Canada",
            country: "United States",
            price: "110",
            rating: "4.94",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "The Moon Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-48517187/original/861bd06c-1641-4038-85e4-c2e23fb030e8.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-48517187/original/57a182dc-1cfe-4ae3-a54b-ef726a6cf10b.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/38a60692-22e4-42a2-b2d2-67415ad5805a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-48517187/original/d956a5fa-0a55-4c7e-8f54-8fe9ec8ce12e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-48517187/original/1c100be9-3124-4c13-97e5-2a7f017b7ee4.jpeg?im_w=720"
            ],
            address: "McCall, Idaho",
            city: "McCall",
            state: "Idaho",
            country: "United States",
            price: "78",
            rating: "4.96",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Smith Rock Casita Steps From Smith Rock State Park",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20152623/original/1e70485a-4693-4ea7-a53e-a6fa5b6c8d2d.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-20152623/original/702f1ba9-e9af-4719-b0c5-c45529aa8283.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/f1a062a1-65af-4f4a-9bb1-65368e3df934.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c03c6072-2cf8-4d09-aec6-e0f20a519ca9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5428ae2e-ac62-4e1a-a4b1-9844e9adbd27.jpg?im_w=720"
            ],
            address: "Terrebonne, Oregon",
            city: "Terrebonne",
            state: "Oregon",
            country: "United States",
            price: "199",
            rating: "4.99",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Gorge Yurt Getaway",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/c3be7396-2d8f-4007-ab9f-84a48ab13ff1.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/f846ed3c-23f0-4728-9fe9-2d2d31476755.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ba3faadf-35ae-4e30-98e1-813a94e0b03c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3680738c-f848-4051-8c81-232653b9227f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6e290e44-b07c-4690-a18d-60339f144f24.jpg?im_w=720"
            ],
            address: "Mosier, Oregon",
            city: "Mosier",
            state: "Oregon",
            country: "United States",
            price: "120",
            rating: "4.93",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Glen Ellen Wine Country Cottage/Hot Tub/Yoga Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-556815229323490321/original/97ba39fb-7c1a-4695-bd78-39b119499523.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-556815229323490321/original/01f2a9cb-1aa8-4f7a-80aa-c934e1d531cf.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/8465f634-dc0a-4a74-9f7b-184e900f4fa8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-556815229323490321/original/b260b1ab-d511-42f4-92dc-e5447e84488f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-556815229323490321/original/2398459c-f08c-4317-9992-825ab087b4f8.jpeg?im_w=720"
            ],
            address: "Glen Ellen, California",
            city: "Glen Ellen",
            state: "California",
            country: "United States",
            price: "350",
            rating: "4.97",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Riverfront Yurt near Hot Springs and Hiking.",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-602818151214696900/original/719d11da-8019-4bcc-91c4-d0e388db4c1d.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-602818151214696900/original/acfbe7ee-51b6-49d8-b9c3-3c2fac78d6b7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-602818151214696900/original/1c5046cf-9019-4030-8333-c0839e26f4c4.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-602818151214696900/original/d7bb19ed-9d28-4793-a93d-d057c96786a6.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-602818151214696900/original/b377d769-25a9-49cd-8375-cccd76d6e699.jpeg?im_w=720"
            ],
            address: "Buhl, Idaho",
            city: "Buhl",
            state: "Idaho",
            country: "United States",
            price: "99",
            rating: "4.98",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Ranch House #2  Farm Tours- Near Crater Lake",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/1571ac89-a054-40a7-97cf-051327c0e3cf.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-35719591/original/ee69a854-0541-46d9-938c-ec0d1db4718d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-35719591/original/d54417a1-2cbb-4c3d-bd81-5fb43ddc4638.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-35719591/original/ceb00e34-56ac-499f-b1a0-f456978dc95c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/f75e7a68-216e-4d04-a42f-9e34b513afc3.jpg?im_w=720"
            ],
            address: "Days Creek, Oregon",
            city: "Days Creek",
            state: "Oregon",
            country: "United States",
            price: "135",
            rating: "4.9",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Yolo Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/d496df6c-0bac-464a-aaa7-676813ba0587.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/95a6b6fb-19ea-4bc5-98ef-226c22427ccd.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b337cc6d-2a27-436a-a1aa-01de2d4f61bc.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6d8cdeb2-f602-4373-8d29-ead7dba4154c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/dade2c76-42ef-457d-8761-6522db55c55a.jpg?im_w=720"
            ],
            address: "Davis, California",
            city: "Davis",
            state: "California",
            country: "United States",
            price: "100",
            rating: "4.99",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Zen Den\nOff-grid\nRoadside Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/2e4650b6-cb3b-4eac-a264-3e523a0d9704.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/a2000769-37ce-4040-9fa3-d551a5320e34.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/abf1cf43-4b4d-4715-bf7d-08a104682875.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/edef3ece-c3cf-458e-bf87-e6788fc159e3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9f4f2e6d-09f5-4855-bb9a-bd3b4627d1a7.jpg?im_w=720"
            ],
            address: "Sequim, Washington",
            city: "Sequim",
            state: "Washington",
            country: "United States",
            price: "245",
            rating: "4.84",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Yurt in the country",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-50969725/original/3a9293d1-4634-4208-9eac-60024d571d7c.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-50969725/original/75b79cc7-6d0d-45a1-b527-130be4de682e.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-50969725/original/13d67abc-2c35-44ff-8526-48eb2a0d823c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-50969725/original/abc3b1f5-7411-49dc-829a-22223f3f3f43.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-50969725/original/ad943449-68e2-4660-9976-869dcecbb865.jpeg?im_w=720"
            ],
            address: "Ridgefield, Washington",
            city: "Ridgefield",
            state: "Washington",
            country: "United States",
            price: "165",
            rating: "4.93",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Cozy Yurt - Mazama special place",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46639465/original/5f8b9756-5942-4743-8008-dcb69b25894c.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46639465/original/a9fd4d1c-492f-4642-804d-251c84cea700.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46639465/original/4620a024-df24-4735-89cd-c0d2386bb053.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46639465/original/69bbddfb-61cf-4a8e-ac24-3c8b80429546.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46639465/original/377b36cb-7583-4ae3-9a45-a041e1960087.jpeg?im_w=720"
            ],
            address: "Okanogan County, Washington",
            city: "Okanogan County",
            state: "Washington",
            country: "United States",
            price: "243",
            rating: "4.92",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Lovely guesthouse in gorgeous nature. (UNIT B)",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-753185687519334969/original/a2627718-6320-402d-b246-0ebc49e30cfe.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-753185687519334969/original/95a507f3-91a1-4f36-a6e2-1e40c17fc4d7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-753185687519334969/original/ffa9ad92-bb98-47c2-9756-156756f47756.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-753185687519334969/original/c6a513ac-c50c-4262-9825-84985e5da3a9.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-753185687519334969/original/e1d32a6c-c22e-4ccf-8e35-9cbf6d5c7595.jpeg?im_w=720"
            ],
            address: "Inverness, California",
            city: "Inverness",
            state: "California",
            country: "United States",
            price: "149",
            rating: "4.95",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Hike In Yurts @ Radius - THE NEST",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-33073838/original/60c71159-8dc3-4f95-9af6-5b8801d425fa.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-33073838/original/22982443-c7ae-4bef-a090-eb9e22de10ed.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-33073838/original/e1429863-e7f4-4e77-85b3-9dd4e8f83a13.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-33073838/original/08773f3e-17d8-493f-9d1d-f80c82b8abb0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/fdb6e93a-f0a0-4791-9e38-9142b25acaa3.jpg?im_w=720"
            ],
            address: "Radium Hot Springs, Canada",
            city: "Radium Hot Springs",
            state: "Canada",
            country: "United States",
            price: "111",
            rating: "4.86",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Off-Grid Yurt with views into Glacier Nat'l Park",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/753018de-6ff4-4b1a-aedd-aa659b233830.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/63a69a5b-6721-40c5-8648-1c67e6460917.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/2ff7b3c4-09d8-40ff-9b25-1edc79d8b439.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/0e898523-d3d3-4fe2-bc75-3b6f6c5a99c3.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/60dfcdd5-af24-4d92-9442-ec9a3494c837.jpg?im_w=720"
            ],
            address: "Flathead County, Montana",
            city: "Flathead County",
            state: "Montana",
            country: "United States",
            price: "200",
            rating: "4.89",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Ruby Pines Vacation Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-660350525708864057/original/326a90f2-0491-452c-9af9-8c8ec156e04f.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-660350525708864057/original/858cab7f-2c1a-4038-a57b-d620c369e2c0.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-660350525708864057/original/d3390ff5-5ca4-4af5-87f6-4d5a56e1425f.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-660350525708864057/original/55a85952-875e-4ff8-9721-b8bbcaa48f78.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/d20ad62d-3323-417f-87b8-de9b79ddef23.jpg?im_w=720"
            ],
            address: "Enterprise, Oregon",
            city: "Enterprise",
            state: "Oregon",
            country: "United States",
            price: "125",
            rating: "5.0",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Glacier Glamping Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-43614439/original/4685b2d5-e1ff-42b8-9a02-5ec642c0655c.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/b5db00b8-6020-4439-97be-7bd609a174de.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7120161c-3f17-4f88-8171-613a3114f1d5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7f1757fd-87cd-49df-b933-953cd096b861.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/93c0d989-ab20-4f3a-9f0f-51ba530b0339.jpg?im_w=720"
            ],
            address: "Coram, Montana",
            city: "Coram",
            state: "Montana",
            country: "United States",
            price: "175",
            rating: "4.83",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Yurt at Base Camp Bigfork",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/666297c7-42e4-433c-b3cb-1bf699e37083.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/e2bac5b0-4e6f-42dd-af32-cf3f03573847.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b0b23586-81b0-46d8-9606-4bbf7619c477.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b5e25663-c7ef-430e-a4fe-7c193a457cc5.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8c060dfe-444b-47d2-86e4-46bc7bf8de11.jpg?im_w=720"
            ],
            address: "Bigfork, Montana",
            city: "Bigfork",
            state: "Montana",
            country: "United States",
            price: "145",
            rating: "4.91",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Mooseshroom Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/92f67fe4-fbe5-4d36-b52e-701bbc76a456.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/8adecca6-51c9-4804-96ce-6a22da5f8d61.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e3a0fee2-a2ca-4469-9504-042e11cce62c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/fc8ba20a-a04a-4da9-885b-836acf06301d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e155362b-0bbd-47be-8ff8-93f16a647546.jpg?im_w=720"
            ],
            address: "Columbia Falls, Montana",
            city: "Columbia Falls",
            state: "Montana",
            country: "United States",
            price: "119",
            rating: "4.95",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Tranquil hillside yurt and spa in the mountains",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/da0aad2f-9255-41fa-b32c-06e575a850dd.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/161fb20e-ab6a-4779-8d9a-3ba7bedda199.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/9bea813c-ab47-42ee-b48c-bb3f4d0ba36a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/8218a4f2-9e82-4536-9d7f-e3a98a880021.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/baabe82f-3bb1-4bdf-b286-82f2d6bc1ba5.jpg?im_w=720"
            ],
            address: "Nevada City, California",
            city: "Nevada City",
            state: "California",
            country: "United States",
            price: "131",
            rating: "5.0",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "The Yurt at Tavin Dorvon",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/41c22733-91a0-421b-abb8-51de0343f828.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/bab0ad5c-642e-4bac-8dc1-b8f8418528e6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3c7f0607-b82a-4c0c-a1bf-a0d7cf90d251.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/42819fcd-c4c7-44f2-b4f4-ce99b5ec9ab8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ddce48bd-a3b6-4a1f-8715-6f9c578dcd3e.jpg?im_w=720"
            ],
            address: "Eugene, Oregon",
            city: "Eugene",
            state: "Oregon",
            country: "United States",
            price: "60",
            rating: "4.87",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Off Grid Yurt At Inshallah",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/0da9f311-705a-4dfc-b085-795280f3e59c.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/20704fb9-f45a-4e85-9aea-a7367bd642e1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-25026397/original/634db777-65d7-457d-9483-fa9e56a4d5ca.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/7b9a2a1a-e0b4-4cd6-97ba-5e59b03e29a8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/690f1347-495e-4cc7-8f5c-554697c19952.jpg?im_w=720"
            ],
            address: "Golden, Canada",
            city: "Golden",
            state: "Canada",
            country: "United States",
            price: "65",
            rating: "4.84",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Hideaway Glamping Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-53866147/original/d9b639b5-4d67-49e1-8a5b-1eb810cc2075.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-53866147/original/4f86ba43-07f5-4b26-9c42-aa3bc5d15937.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/ac316cb1-5905-4ad4-9b28-18f7f5823074.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/5b5d082a-d604-4764-bf46-3b036982e71e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-53866147/original/e33d64a7-354a-4285-8c40-14482a1e25d2.jpeg?im_w=720"
            ],
            address: "Bellingham, Washington",
            city: "Bellingham",
            state: "Washington",
            country: "United States",
            price: "110",
            rating: "4.95",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Private Canyon with a Rustic One-of-a-kind Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-695749473766562409/original/e1441bae-20c2-49f2-b555-d93726c7068c.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-695749473766562409/original/a0b814dd-c376-48d9-8a5c-92179f7eef7a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-695749473766562409/original/044b56fd-783a-43f6-b602-dd11be5676e1.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-695749473766562409/original/a1ebbfd0-bf1f-4f3e-af02-9060a3c13375.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-695749473766562409/original/0d72aca8-c0ec-495c-be9e-00aa692cdb8b.jpeg?im_w=720"
            ],
            address: "Malad City, Idaho",
            city: "Malad City",
            state: "Idaho",
            country: "United States",
            price: "125",
            rating: "4.97",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Cozy Getaway Yurt with  beautiful view!",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/b981e25f-f414-4b28-93f8-e23e8323062b.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/756f4f70-82c4-463a-b5ba-65013e63690d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/cbb39410-4fbc-4e88-8cd4-ac084052df4f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/70526823-1408-4c19-ad1a-c4f822ac6fa8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/a903008e-b90e-4793-a8f5-eac93a5749a3.jpg?im_w=720"
            ],
            address: "Trout Creek, Montana",
            city: "Trout Creek",
            state: "Montana",
            country: "United States",
            price: "82",
            rating: "4.96",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Rest Deeply and Stargaze in our 20-Ft Emerald Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/7c57a825-07da-4f90-99ce-74ce3369c025.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-51125437/original/9e518262-463f-4415-a2e5-1625aba1b817.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/445993d2-92f3-47fe-b5ef-1e26c32650d8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-51125437/original/86b08a58-fee2-4e6a-8d32-77eac56b37d7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/3e6aedf0-daa4-4f1c-ad3d-a8ca97463575.jpg?im_w=720"
            ],
            address: "Weed, California",
            city: "Weed",
            state: "California",
            country: "United States",
            price: "145",
            rating: "5.0",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Enchanted Forest Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-50119484/original/7fba1d49-51df-42b8-96d6-2110ee58b3a8.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-50119484/original/f094fe80-29f9-4411-996c-e44533f0f9fb.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-50119484/original/7b57240c-0c75-491a-a829-6b10c91b6fd7.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-50119484/original/17c4f4d0-08db-4e0a-9a98-afce32a96374.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-50119484/original/5df39dd2-d290-48d6-b894-973ce5e04c63.jpeg?im_w=720"
            ],
            address: "Lummi Island, Washington",
            city: "Lummi Island",
            state: "Washington",
            country: "United States",
            price: "123",
            rating: "5.0",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Luxury Retreat Yurt at Brigadoon",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-870989443979618635/original/270d215d-ee0b-4a38-9722-b8b7b51443dd.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-870989443979618635/original/0062ab36-5eea-4cd1-9279-184f5191dc78.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-870989443979618635/original/cbed90d4-058a-4b05-b3e4-168aa0893526.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-870989443979618635/original/df4083f1-776e-4a26-bca4-4959ace2166a.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-870989443979618635/original/f9c9743b-2536-4321-aabe-54111c224153.jpeg?im_w=720"
            ],
            address: "Port Hadlock-Irondale, Washington",
            city: "Port Hadlock-Irondale",
            state: "Washington",
            country: "United States",
            price: "155",
            rating: "5.0",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Conrad Creek Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-20935544/original/acfb73e1-70d2-4cb8-91a4-257780b5fcd0.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-20935544/original/ec5479b7-2026-476e-ac34-4182aa4beb57.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/67ff7198-ae3f-4f2d-81c1-0e5081f2e99f.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/4353c448-8a1f-4791-8550-872d27d8a0f7.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-20935544/original/bce0ee6e-34fe-49c9-8ef9-50bcf01ebf11.jpeg?im_w=720"
            ],
            address: "Lamoille, Nevada",
            city: "Lamoille",
            state: "Nevada",
            country: "United States",
            price: "175",
            rating: "4.97",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "The Yuba Yurt at RiverSea East",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/d7539f4a-9873-4d79-a4ab-e7a13693be76.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/a6b7f931-963b-4920-96f4-4ba645b18c84.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/23073837/981536cd_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/23073840/6aab28d1_original.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/23073841/048bc74d_original.jpg?im_w=720"
            ],
            address: "North San Juan, California",
            city: "North San Juan",
            state: "California",
            country: "United States",
            price: "101",
            rating: "4.94",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Mountain  Range Yurt",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/89db3fc3-4388-4cc5-a96c-54cd13c7bb32.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/00bc3bf7-5314-4de9-bea3-46463a4bff9c.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/b1246fd5-b317-4cc2-964e-cd54b2e78a6b.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/fcfec221-2db6-43c3-8932-4a04d1e5e5ff.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/3ab21a3f-e6bc-48b0-aac4-ef1451c74bcb.jpg?im_w=720"
            ],
            address: "Skookumchuck, Canada",
            city: "Skookumchuck",
            state: "Canada",
            country: "United States",
            price: "168",
            rating: "4.93",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Rejuvenate in a Magical 30-Foot Yurt in the Woods",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/656af70d-58d1-42b0-bb98-ed8a67b6f18b.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/c423b544-a8c7-47d4-b474-7ae3f9bcbb5e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7e9783a7-affd-451a-aabb-bd286989cfad.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/037faf54-6d75-4438-9851-44de3cddb38e.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/09ac78b3-967c-42b0-ae34-a2c8f73f2008.jpg?im_w=720"
            ],
            address: "Weed, California",
            city: "Weed",
            state: "California",
            country: "United States",
            price: "195",
            rating: "5.0",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Spencer Mtn solar yurt glamping",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/835448a0-346c-4a06-98dd-72566d3748a8.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/a4886363-c411-471c-b2a3-ee7cb215c404.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/abca6d7d-f292-4571-9119-977141b88ca2.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-795027509576684720/original/77edc119-8fcf-42c5-af28-f23ffdeeee51.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/399901a2-da81-4fcd-af63-31e2aafcb68e.jpg?im_w=720"
            ],
            address: "Whitefish, Montana",
            city: "Whitefish",
            state: "Montana",
            country: "United States",
            price: "129",
            rating: "5.0",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "City of Rocks Retreat - Pinion Yurt (Pets welcome)",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/9bcf168d-d6a8-415d-be51-cbb08b6b5846.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/b955f872-a2d9-48b5-b16f-858698b77417.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/dafa12c3-0ae1-4271-8cc8-f008117647c0.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c91e0678-9ad0-4811-8ac4-0398c1752055.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/7a62878c-e4f9-486d-b0e2-1da5adf7cf9c.jpg?im_w=720"
            ],
            address: "Almo, Idaho",
            city: "Almo",
            state: "Idaho",
            country: "United States",
            price: "59",
            rating: "4.88",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Hike In Yurts @ Radius - THE HOLLOW",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-33073645/original/a31a5fe9-308e-404c-afc2-ee99925f5e47.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-33073645/original/9ed4a77b-2309-47e5-8814-3a327156a302.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/f9c78cb5-ff23-4d25-9355-aa916153f8ca.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-33073645/original/e9e7c1ee-4456-4c1c-9644-10e93cd917bb.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/ce765f7d-5ca7-4ad0-b97b-e640c9b8b28c.jpg?im_w=720"
            ],
            address: "Radium Hot Springs, Canada",
            city: "Radium Hot Springs",
            state: "Canada",
            country: "United States",
            price: "123",
            rating: "4.97",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "River view Yurt on the South Fork American River",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/8ff60085-3167-406e-8164-86bc52508471.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/05528908-01dd-4117-aeaf-5d31563ef36a.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/f3804469-96f4-4f5c-aa92-69b48797fff6.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ccff42be-c986-4b5f-b321-316183def9c1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ece8b49c-487c-46a5-af2f-174740c3e795.jpg?im_w=720"
            ],
            address: "Coloma, California",
            city: "Coloma",
            state: "California",
            country: "United States",
            price: "190",
            rating: "4.88",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Sunrise Retreat Yurt Accommodations",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/c5d564f2-dd24-484b-9d3a-9e22c07fd54c.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/e487c9e6-a583-4ec8-b692-0dba6397609d.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/32dcd244-8224-4dc0-9301-d068fb2acac9.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/6b794922-1da3-453c-8e29-3939f2c68cf8.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e837c051-3f04-4dae-8e04-24550e536d79.jpg?im_w=720"
            ],
            address: "Cascade, Idaho",
            city: "Cascade",
            state: "Idaho",
            country: "United States",
            price: "139",
            rating: "4.89",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Yurt 1 with 4 Twin XL beds",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/2519c20b-78f5-46c2-b4c4-f87e51e5e034.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/b71fa639-b39d-4643-8751-04d8ca35ae57.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/337bb679-66cb-4099-8c1a-de016018d9c1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/55108e6c-8053-4d67-89dc-27f624484561.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/25fe2f18-3b72-4526-9b91-809ac10f2ff9.jpg?im_w=720"
            ],
            address: "Nyssa, Oregon",
            city: "Nyssa",
            state: "Oregon",
            country: "United States",
            price: "175",
            rating: "4.97",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Umpqua River, Dog Friendly yurt!",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/60a6e5cc-97ea-488c-90f6-4f5eef6608a9.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/1d67374a-d659-4d00-b4e8-cbb893c87006.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/37a97eca-50a3-44ad-ac2c-3711a8dc4260.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/98f70ce9-1845-4e37-8085-f988ec05e085.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/d49fb59a-9398-47bc-ba8c-ea1a053d7bdf.jpg?im_w=720"
            ],
            address: "Roseburg, Oregon",
            city: "Roseburg",
            state: "Oregon",
            country: "United States",
            price: "115",
            rating: "5.0",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Hike In Yurts @ Radius - THE PERCH",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/039330f5-0622-4277-b800-3d9dfa5522ae.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/d0b0123c-7103-4f2d-b379-c9651dfdd845.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/77e8f9e3-e7b4-4e0e-8b92-98cdbef27670.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ff30a4ec-4bf5-433c-b175-07daac692aee.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/c108b963-b97b-4a00-937f-aa175c27a191.jpg?im_w=720"
            ],
            address: "Radium Hot Springs, Canada",
            city: "Radium Hot Springs",
            state: "Canada",
            country: "United States",
            price: "139",
            rating: "5.0",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Pine Meadows Yurt minutes from downtown Sandpoint",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/243167d5-d1d9-458d-89dc-b64d0b69cfdb.jpg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/2ccf5c4c-3a31-4999-96da-a6d95541eae1.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/e04e87eb-b9b5-4503-8058-ea212e3dd303.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/ff68f02f-c491-41d5-a1fa-80e0002a8251.jpg?im_w=720",
                "https://a0.muscache.com/im/pictures/caa7f853-ac73-4521-9d94-48338bd84214.jpg?im_w=720"
            ],
            address: "Sandpoint, Idaho",
            city: "Sandpoint",
            state: "Idaho",
            country: "United States",
            price: "110",
            rating: "4.89",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "The Off-Grid Red Yurt in the woods",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-644225953072427824/original/b7b389ff-1913-4ce0-a677-81914b33952d.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-644225953072427824/original/11840ccc-d5c8-41e5-a146-0bb4430fc93c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-644225953072427824/original/2c1a0333-b5f4-4fef-8612-e2bd01b9ef3c.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-644225953072427824/original/74a2a2a6-db8a-41ee-998a-805591af268d.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-644225953072427824/original/c43166f3-d40c-44e8-81e1-41d0b0080403.jpeg?im_w=720"
            ],
            address: "Blaeberry, Canada",
            city: "Blaeberry",
            state: "Canada",
            country: "United States",
            price: "73",
            rating: "4.95",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        },
        {
            id: uuid(),
            name: "Large Charming Yurt at Rocky Ridge Outpost",
            category: "Yurts",
            image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45141589/original/a4b56b33-94ca-4932-9aea-f607a6646d99.jpeg?im_w=720",
            imageArr: [
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45141589/original/a0c6880a-86da-4f4c-b1ef-6d51d3c53cbd.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45141589/original/bcce4cb3-858c-4bcc-861b-46d8764b80ea.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-45141589/original/f3253f3d-10dd-4247-b750-b2edae31b1cd.jpeg?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-45141589/original/ca7c9e05-efef-418e-a7f9-d76f170a3301.jpeg?im_w=720"
            ],
            address: "Manila, Utah",
            city: "Manila",
            state: "Utah",
            country: "United States",
            price: "119",
            rating: "4.96",
            numberOfBathrooms: 2,
            numberOfBeds: 1,
            numberOfguest: 3,
            numberOfBedrooms: 1,
            numberOfStudies: 1,
            hostName: "Lokesh",
            hostJoinedOn: "December 2019",
            ameneties: [
                "Kitchen",
                "Wifi",
                "Pets Allowed"
            ],
            healthAndSafety: [
                "No Smoke alarm",
                "No Carbon monoxide alarm"
            ],
            houseRules: [
                "Check-in: After 1:00 pm",
                "Check out: 11:00 am",
                "Pets are allowed"
            ],
            propertyType: "Guest House",
            isCancelable: true
        }
    ]
}

module.exports = hotels;
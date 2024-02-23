import done from '../assets/done.png'
import canceled from '../assets/canceled.png'
import part from '../assets/part.png'
import shipping from '../assets/shipping.png'
import boxed from '../assets/boxed.png'
import loaded from '../assets/loaded.png'

export  const markets = [
    {
        id: 1,
        name: 'Darvoza Savdo MCHJ',
        adresse: 'Toshkent shahar, Muqumiy köchasi, 36-uy',
        location: '51.468971, 7.212515'
        
    },
    {
        id: 2,
        name: 'Karzinka.uz Abay',
        adresse: 'Toshkent shahar, Qoratosh-12, Zarrin köchasi, 33-uy',
        location: '51.486718, 7.191916'
    },
    {
        id: 3,
        name: 'Makro Qoratosh',
        adresse: 'Toshkent shahar, Mirzo Ulugbek tumani, Sarbon köchasi, 26-uy',
        location: '51.479021, 7.250624'
    },
    {
        id: 4,
        name: 'Karzinka Malika',
        adresse: 'Toshkent shahar, Yashnabod tumani, Bobur köchasi, 3-uy',
        location: '51.474222, 7.209510'
    },
    {
        id: 5,
        name: 'Oqtepa Lavash',
        adresse: 'Toshkent shahar, Yunusobod tumani, Odilov köchasi 12-uy',
        location: '51.470676, 7.238032'
    },
    {
        id: 6,
        name: 'Evos, Chorsu',
        adresse: 'Toshkent shahar, Mirobod tumani, Gözal köchasi, 6-uy',
        location: '51.483374, 7.208639'
    },
]

export const Shipments = [
    {
        id: 1,
        warehouseID: 1,
        transportID: 1,
        userID: 1,
        statusID: 1,
        number: 1001,
        regionID: 1
    },
    {
        id: 2,
        warehouseID: 1,
        transportID: 2,
        userID: 2,
        statusID: 1,
        number: 1002,
        regionID: 2
    }
]

export const warehouses = [
    {
        id: 1,
        name: 'Dinay-Toshkent'
    },
    {
        id: 1,
        name: 'Dinay-Samarqand'
    },
    {
        id: 1,
        name: 'Dinay-Andijon'
    },
]

export const users = [
    {
        id: 1,
        name: 'Akbar Kamolov',
        warehouseId: 1,
        roleId: 1,
        
    },
    {
        id: 2,
        name: 'Sattorov Qosim',
        warehouseId: 1,
        roleId: 1,
        
    },
    {
        id: 3,
        name: 'Sattorov Qosim',
        warehouseId: 1,
        roleId: 1
    }

]

export const roles = [
    {
        id: 1,
        name: 'Expeditor'
    },
    {
        id: 2,
        name: 'Admin'
    }
]

export const transports = [
    {
        id: 1,
        name: 'ISUSU',
        volum: 500,
        stateNumber: '01A777AA',
        isActive: true
    },
    {
        id: 2,
        name: 'Damas',
        volum: 200,
        stateNumber: '01888AA',
        isActive: true
    }

]

export const orders = [
    {
        id: 1,
        number: 2001,
        marketId: 1,
        shipmentId: 1,
        paymentId: 1,
        statusId: 4,
        qeueIndex: 3,
        
    },
    {
        id: 2,
        number: 2002,
        marketId: 2,
        shipmentId: 1,
        paymentId: 1,
        statusId: 5,
        qeueIndex: 3,
        
    },
    {
        id: 3,
        number: 2003,
        marketId: 3,
        shipmentId: 1,
        paymentId: 1,
        statusId: 5,
        qeueIndex: 2,
        
    },
    {
        id: 4,
        number: 2004,
        marketId: 4,
        shipmentId: 1,
        paymentId: 1,
        statusId: 3,
        qeueIndex: 2,
        
    },
    {
        id: 5,
        number: 2005,
        marketId: 5,
        shipmentId: 1,
        paymentId: 1,
        statusId: 3,
        qeueIndex: 1,
        
    },
    {
        id: 6,
        number: 2006,
        marketId: 6,
        shipmentId: 2,
        paymentId: 1,
        statusId: 3,
        qeueIndex: 1,
        
    }
]

export const statuses = [
    {
        id: 1,
        name: 'Tayyorlandi',
        logo: boxed
    },
    {
        id: 2,
        name: 'Yuklandi',
        logo: loaded
    },
    {
        id: 3,
        name: 'Yetkazilmoqda',
        logo: shipping
    },
    {
        id: 4,
        name: 'Yetkazildi',
        logo: done
    },
    {
        id: 5,
        name: 'Bekor qilindi',
        logo:  canceled
    },
    {
        id: 6,
        name: 'Qisman Topshirildi',
        logo: part
    }
]

export const paymentTypes = [
    {
        id: 1, 
        name: 'Karta orqali tölov'
    },
    {
        id: 2, 
        name: 'Bank ötkazmasi'
    },
    {
        id: 3, 
        name: 'Naqt tölov'
    }
]

export const products = [
    {
        id: 1,
        name: 'Olma',
        volum: 0.5,
        price: 3000,
        articleNumber: 1102211456
    },
    {
        id: 2,
        name: 'Olma',
        volum: 1,
        price: 5000,
        articleNumber: 1102211245
    },
    {
        id: 3,
        name: 'Gilos',
        volum: 0.5,
        price: 3000,
        articleNumber: 1101127658
    },{
        id: 4,
        name: 'Gilos',
        volum: 1,
        price: 5000,
        articleNumber: 1102211567
    },
    {
        id: 5,
        name: 'Anor',
        volum: 0.5,
        price: 4000,
        articleNumber: 1102211675
    },
    {
        id: 6,
        name: 'Anor',
        volum: 1,
        price: 6000,
        articleNumber: 1102211998
    }
]

export const orderProducts = [
    {
        id: 1,
        productId: 1,
        quantity: 20,
        orderId: 1
    },
    {
        id: 1,
        productId: 2,
        quantity: 30,
        orderId: 1
    },
    {
        id: 1,
        productId: 3,
        quantity: 10,
        orderId: 1
    },
    {
        id: 1,
        productId: 4,
        quantity: 40,
        orderId: 1
    },
    {
        id: 1,
        productId: 1,
        quantity: 20,
        orderId: 2
    },
    {
        id: 1,
        productId: 2,
        quantity: 60,
        orderId: 2
    },
    {
        id: 1,
        productId: 3,
        quantity: 10,
        orderId: 2
    },
    {
        id: 1,
        productId: 4,
        quantity: 90,
        orderId: 2
    },
    {
        id: 1,
        productId: 1,
        quantity: 20,
        orderId: 3
    },
    {
        id: 1,
        productId: 2,
        quantity: 30,
        orderId: 3
    },
    {
        id: 1,
        productId: 3,
        quantity: 10,
        orderId: 3
    },
    {
        id: 1,
        productId: 4,
        quantity: 40,
        orderId: 3
    },
    {
        id: 1,
        productId: 1,
        quantity: 20,
        orderId: 4
    },
    {
        id: 1,
        productId: 2,
        quantity: 40,
        orderId: 4
    },
    {
        id: 1,
        productId: 3,
        quantity: 170,
        orderId: 4
    },
    {
        id: 1,
        productId: 4,
        quantity: 80,
        orderId: 4
    },
    {
        id: 1,
        productId: 1,
        quantity: 10,
        orderId: 5
    },
    {
        id: 1,
        productId: 2,
        quantity: 60,
        orderId: 5
    },
    {
        id: 1,
        productId: 3,
        quantity: 120,
        orderId: 5
    },
    {
        id: 1,
        productId: 4,
        quantity: 70,
        orderId: 5
    },
    {
        id: 1,
        productId: 1,
        quantity: 10,
        orderId: 6
    },
    {
        id: 1,
        productId: 2,
        quantity: 50,
        orderId: 6
    },
    {
        id: 1,
        productId: 3,
        quantity: 100,
        orderId: 6
    },
    {
        id: 1,
        productId: 4,
        quantity: 20,
        orderId: 6
    }
]
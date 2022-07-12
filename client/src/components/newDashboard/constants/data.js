import images from "./images"

const data = {
    user: {},
    summary: [
        {
            title: 'Ventas',
            subtitle: 'Total Diario De Ventas',
            value: '$1.000',
            percent: 70
        },
        {
            title: 'Ordenes',
            subtitle: 'Total Ordenes',
            value: '3000',
            percent: 49
        },
        {
            title: 'Usuarios',
            subtitle: 'Total De Usuarios',
            value: '678',
            percent: 38
        },
        {
            title: 'Visitas',
            subtitle: 'Total Visitas',
            value: '2345',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Ordenes'
        },
        {
            value: '9.876K',
            title: 'Usuarios'
        },
        {
            value: '1.234K',
            title: 'Productos'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data
import {
    HomeOutlined,
    LocalOfferOutlined,
    ConnectWithoutContactOutlined,
    NewspaperOutlined,
    DirectionsRunOutlined,
    SettingsOutlined
} from '@mui/icons-material'

export const navMenu = [
    {
        name: 'Главная',
        icon: <HomeOutlined />,
        path: '/',
        id: 1
    },
    {
        name: 'Прайс',
        icon: <LocalOfferOutlined />,
        path: '/price',
        id: 2
    },
    {
        name: 'Контакты',
        icon: <ConnectWithoutContactOutlined />,
        path: '/contacts',
        id: 3
    },
    {
        name: 'Новости',
        icon: <NewspaperOutlined />,
        path: '/news',
        id: 4
    },
    {
        name: 'Кабинет',
        icon: <HomeOutlined />,
        path: '/cabinet',
        id: 5
    },
    {
        name: 'Настройки аккаунта',
        icon: <SettingsOutlined />,
        path: '/account_settings',
        id: 6
    },
]
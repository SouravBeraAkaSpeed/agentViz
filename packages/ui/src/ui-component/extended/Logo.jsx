import logo from '@/assets/images/agentViz_white.svg'
import logoDark from '@/assets/images/agentViz_dark.svg'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
            <img
                style={{ objectFit: 'contain', height: 'auto', width: 150 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='agentViz'
            />
        </div>
    )
}

export default Logo

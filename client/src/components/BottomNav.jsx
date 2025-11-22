import React, { useRef } from 'react'
import { BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material'
import { LocationOn, AddLocationAlt } from '@mui/icons-material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import ClusterMap from './map/ClusterMap';
import Estabelecimentos from './estabelecimentos/Estabelecimentos';
import AddRoom from './addPlace/AddRoom';
import { useEffect } from 'react';
import Protected from './protectedView/Protected';
import { useValue } from '../context/ContextProvider';
const BottomNav = () => {

    const { state: { section }, dispatch } = useValue();
    const ref = useRef();
    useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
    }, [section])
    return (
        <Box ref={ref}>
            {{
                0: <ClusterMap />,
                1: <Estabelecimentos />,
                2: <Protected> <AddRoom /></Protected>,
            }[section]}
            <Paper
                elevation={3}
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }}
            >
                <BottomNavigation
                    showLabels
                    value={section}
                    onChange={(e, newValue) => dispatch({ type: 'UPDATE_SECTION', payload: newValue })}
                    sx={{ bgcolor: '#2CAF1E' }}
                >
                    <BottomNavigationAction sx={{ bgcolor: '#2CAF1E' }} label='Map' icon={<LocationOn />} />
                    <BottomNavigationAction sx={{ bgcolor: '#2CAF1E' }} label='Estabelecimentos' icon={<DomainAddIcon />} />
                    <BottomNavigationAction sx={{ bgcolor: '#2CAF1E' }} label='Add' icon={<AddLocationAlt />} />

                </BottomNavigation >
            </Paper>
        </Box>
    )
}

export default BottomNav
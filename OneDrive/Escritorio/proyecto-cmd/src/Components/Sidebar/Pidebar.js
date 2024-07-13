import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { useAuth0 } from '@auth0/auth0-react';
import 'primeicons/primeicons.css';
import './Pidebar.css';

// Definición del componente SidebarItem
const SidebarItem = ({ label, icon, children }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <li>
            <div className={`p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer`} onClick={toggleExpand}>
                <span>
                    <i className={`pi ${icon} mr-2`}></i>
                    <span className="font-medium">{label}</span>
                </span>
                <i className={`pi ${expanded ? 'pi-chevron-down' : 'pi-chevron-right'} ml-auto`}></i>
                <Ripple />
            </div>
            <ul className={`list-none p-0 m-0 ${expanded ? '' : 'hidden'} overflow-hidden transition-all transition-duration-400 transition-ease-in-out`}>
                {children}
            </ul>
        </li>
    );
};

// Componente principal SidebarLat
export default function SidebarLat() {
    const [visible, setVisible] = useState(false);
    const { user } = useAuth0();

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="sidebar-lat">
                <div className="flex flex-wrap align-items-center justify-content-between flex-shrink-0">
                    <img src='https://cdn.leonardo.ai/users/7b67fc69-fcab-4626-a807-ccd0084f2bca/generations/080fab14-c671-4b84-90a2-29addc1a4c70/Default_crea_un_logo_que_tenga_que_ver_cos_las_letras_LLA_sobr_3.jpg?w=512' alt="Logo de BDS" className="logo" />
                    <h2 className="nombre">Wapayasos</h2>
                </div>
                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                <div className="overflow-y-auto">
                    <ul className="list-none p-3 m-0">
                        <SidebarItem label="Gestión de Usuarios" icon="pi pi-star">
                            <li>
                                <Link to='/Dashboard' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-home mr-2"></i>
                                    <span className="font-medium">Dashboard</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link to='/Clientes' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-table mr-2"></i>
                                    <span className="font-medium">Clients</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <SidebarItem label="Sales" icon="pi pi-chart-line">
                                <SidebarItem label="Ingresos" icon="pi pi-chart-line">
                                    <li>
                                        <Link to='/Search' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-search mr-2"></i>
                                            <span className="font-medium">Search</span>
                                            <Ripple />
                                        </Link>
                                    </li>
                                </SidebarItem>
                                <li>
                                    <Link to='/Expenses' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Expenses</span>
                                        <Ripple />
                                    </Link>
                                </li>
                            </SidebarItem>
                            <li>
                                <Link to='/Team' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-users mr-2"></i>
                                    <span className="font-medium">Team</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link to='/Messages' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-comments mr-2"></i>
                                    <span className="font-medium">Messages</span>
                                    <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"></span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link to='/Calendario' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-calendar mr-2"></i>
                                    <span className="font-medium">Calendario</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link to='/Settings' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-cog mr-2"></i>
                                    <span className="font-medium">Settings</span>
                                    <Ripple />
                                </Link>
                            </li>
                        </SidebarItem>
                    </ul>
                    <ul className="list-none p-3 m-0">
                        <SidebarItem label="Aplicación" icon="pi pi-th-large">
                            <li>
                                <Link to='/Projects' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-folder mr-2"></i>
                                    <span className="font-medium">Projects</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link to='/Performance' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-bar mr-2"></i>
                                    <span className="font-medium">Performance</span>
                                    <Ripple />
                                </Link>
                            </li>
                        </SidebarItem>
                    </ul>
                </div>
                <div className="user-info flex align-items-center justify-content-center mt-3">
                    <img src={user.picture} alt={user.name} className="user-picture mr-2" />
                    <span className="user-name">{user.name}</span>
                </div>
            </Sidebar>
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="menu-button" />
        </div>
    );
}

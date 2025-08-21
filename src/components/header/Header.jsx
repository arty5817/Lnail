'use client'
import React, {useState} from 'react';
import Link from "next/link";
import styles from "./header.module.scss"
import { Drawer, IconButton, List, ListItem, Tooltip} from "@mui/material";
import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import {Device} from "@/components/Device";
import {usePathname, useRouter} from "next/navigation";
import logo from '../../../public/logo1.png'


const links = [
    {
        id: 1,
        title: "Services",
        url: "/services",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Gallery",
        url: "/gallery",
    },
    {
        id: 4,
        title: "Contact",
        url: "/contact",
    },
];

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                <Image src={logo} alt={logo} className={styles.img} />
            </Link>
            <Device mobile>
                <div className={styles.mobileNav}>
                    <IconButton onClick={() => setOpen(true)}>
                        <MenuRoundedIcon />
                    </IconButton>
                    <Drawer
                        anchor="right"
                        open={open}
                        onClose={(e) => setOpen(false)}
                        PaperProps={{
                            sx: {
                                minWidth: 250,
                                backgroundColor: "#ffc8dd",
                                color: "#ff8fab",
                            },
                        }}
                    >
                        <List>
                            <ListItem className={styles.menuHead}>
                                <IconButton onClick={() => setOpen(false)}>
                                    <CancelPresentationOutlinedIcon />
                                </IconButton>
                            </ListItem>
                            {links.map((link) => (
                                <ListItem
                                    key={link.id}
                                    className={styles.menuItems}
                                    onClick={() => setOpen(false)}
                                >
                                    <Link
                                        href={link.url}
                                        className={`${
                                            pathname === link.url
                                                ? styles.mobileActive
                                                : styles.mobileLink
                                        }`}
                                    >
                                        {link.title}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </div>
            </Device>


            <Device desktop>
                <div className={styles.links}>
                    {links.map((link) => (
                        <Tooltip key={link.id} leaveDelay={200} title={link.title} arrow>
                            <Link
                                key={link.id}
                                href={link.url}
                                className={`${
                                    pathname === link.url ? styles.active : styles.link
                                }`}
                            >
                                {link.title}
                            </Link>
                        </Tooltip>
                    ))}
                </div>
            </Device>
        </div>

    );
};

export default Header;
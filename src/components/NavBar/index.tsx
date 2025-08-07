"use client";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Container,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (lang: string) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    const newPath = segments.join("/");
    router.replace(newPath);
  };

  return (
    <AppBar position="static" color="default">
      <Container>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            padding: "0px",
          }}
          disableGutters
        >
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              style={{
                cursor: "pointer",
                objectFit: "contain",
                justifyContent: "start",
              }}
            />
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Select
              value={locale}
              onChange={(e) => handleChange(e.target.value)}
              size="small"
            >
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="ar">AR</MenuItem>
            </Select>

            <IconButton component={Link} href={`/${locale}/favourites`}>
              <Badge badgeContent={2} color="secondary">
                <MdFavoriteBorder />
              </Badge>
            </IconButton>

            <IconButton component={Link} href={`/${locale}/cart`}>
              <Badge badgeContent={3} color="secondary">
                <RiShoppingCart2Line />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

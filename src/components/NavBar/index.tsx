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

const Navbar = () => {
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

          <div>
            <IconButton component={Link} href="/favourites">
              <Badge badgeContent={2} color="secondary">
                <MdFavoriteBorder />
              </Badge>
            </IconButton>

            <IconButton component={Link} href="/cart">
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

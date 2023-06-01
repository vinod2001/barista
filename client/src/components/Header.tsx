import React, { useContext, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import mainLogo from "../images/Barista_Logo.webp";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import { StateContext } from "../context/StateContext";
import { Link } from "react-router-dom";

type Props = {
  isBasket?: boolean;
};
export const Header = ({ isBasket }: Props) => {
  const { cartLists, setCartLists, cartNumber, setCartNumber } =
    useContext<any>(StateContext);
  // const [cartNumber, setCartNumber] = useState<{ totalCartItems: number }>()

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        setCartNumber(data.length);
      })
      .catch((error) => {
        console.log(error.data);
      });
    if (cartLists.length > 0) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartLists),
      };
      fetch("http://localhost:5000/cart", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          // setCartNumber(data)
          setCartLists([]);
        })
        .catch((error) => {
          console.log(error.data);
        });
    }
  }, [cartLists]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        border: "0px solid red",
        m: 2,
        position: "sticky",
        top: "0px",
        background: "#0c1015",
      }}
    >
      <Link to="/">
        <Box
          sx={{
            background: `url(${mainLogo}) no-repeat`,
            backgroundSize: "100%",
            height: "150px",
            width: "300px",
            border: "0px solid #fff",
          }}
        ></Box>
      </Link>
      {isBasket && cartNumber > 0 && (
        <Box>
          <Link to="/cart">
            <Badge badgeContent={cartNumber} color="primary">
              <LocalMallIcon />
            </Badge>
          </Link>
        </Box>
      )}
    </Box>
  );
};

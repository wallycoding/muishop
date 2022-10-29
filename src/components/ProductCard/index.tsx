import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ProductEntity from "../../domain/entities/ProductEntity";

interface ProductCardProps extends ProductEntity {
  onClick?(event: React.MouseEvent<HTMLDivElement>): void;
}

const ProductCard = (props: ProductCardProps) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <Card
      sx={{ cursor: "pointer", minWidth: 200 }}
      onMouseEnter={() => setShowMoreInfo(true)}
      onMouseLeave={() => setShowMoreInfo(false)}
      onClick={props.onClick}
    >
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt={props.title}
      />
      <CardContent sx={{ minHeight: 120 }}>
        <Typography fontWeight="bold" variant="h6" component="div">
          {props.title}
        </Typography>
        <Typography
          sx={{
            marginTop: 1,
            height: {
              xs: "auto",
              sm: showMoreInfo ? 30 : 0,
            },
            overflow: "hidden",
            transition: "1s height",
          }}
          fontWeight="bold"
          variant="h5"
          component="div"
        >
          {props.payment.amount.toLocaleString("pt-BR", {
            currency: props.payment.currency,
            style: "currency",
          })}
        </Typography>
        <Rating
          style={{ marginBottom: 10 }}
          name="half-rating-read"
          size="small"
          defaultValue={props.rating}
          precision={0.5}
          readOnly
        />
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// materialm dependency
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { fetchPokemonById } from "../../redux/actions/pokemonActions";

// my code ends

const PokemonPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const pokemonDetails = useSelector((state: any) => state.pokemonById);

  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  useEffect(() => {
    console.log(id);
    if (id) {
      dispatch(fetchPokemonById(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center", // Add this property
          textAlign: "center", // Add this property
          marginLeft: 60,
          marginTop: 15
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            // image={`${pokemonDetails.sprites.back_default}`}
            alt="Pokemon Image"
            sx={{
              objectFit: "cover",
              borderRadius: "10px 10px 0 0",
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Name: {pokemonDetails.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Order: {pokemonDetails.order}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Height: {pokemonDetails.height}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Weight: {pokemonDetails.weight}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Base Experience: {pokemonDetails.base_experience}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default PokemonPage;

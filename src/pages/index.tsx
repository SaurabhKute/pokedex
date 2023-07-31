import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import { fetchPokemonList } from "@/redux/actions/pokemonActions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

interface Pokemon {
  id: string;
  name: string;
}

const columns: GridColDef[] = [
  { field: "serialNumber", headerName: "#", width: 100 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "url", headerName: "URL", width: 200 },
];

const HomePage = () => {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const router = useRouter();
  const pokemonList = useSelector((state: any) => state.pokemonList);
  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const handleRowClick = (params: any) => {
    console.log(params, "llll");
    // const selectedPokemon = pokemonList[params.rowIndex];
    router.push(`/pokemon/${params.id}`);
  };

  const rowsWithKey: Pokemon[] = pokemonList?.map(
    (p: Pokemon, index: number) => ({
      ...p,
      id: String(index + 1),
      key: String(index + 1), // Add a unique key for each row
      serialNumber: index + 1,
    })
  );
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowsWithKey}
        columns={columns}
        onRowClick={handleRowClick}
        pageSizeOptions={[5, 10, 15, 20]}
        rowsPerPageOptions={[3]}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        {...({} as any)} // Type assertion for DataGrid props
      />
    </div>
  );
};

export default HomePage;

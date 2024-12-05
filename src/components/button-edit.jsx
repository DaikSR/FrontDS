import { useState } from "react";
import { UseAuthMe } from "../hooks/auth-me";
import { ModalEditProduct } from "./modal-edit-product";

export function ButtonEdit({ productSelected }) {
  const { userData } = UseAuthMe();

  const [openModalEdit, setOpenModalEdit] = useState(false);

  if (userData && userData.role === "admin") {
    return (
      <>
        <button
          type="button"
          style={{
            cursor: "pointer",
            backgroundColor: "red",
            color: "white",
            borderRadius: "8px",
            border: "none",
            paddingBlock: "4px",
            marginTop: "10px",
          }}
          onClick={() => setOpenModalEdit(true)}
        >
          Editar
        </button>

        <ModalEditProduct
          open={openModalEdit}
          setOpen={setOpenModalEdit}
          productSelected={productSelected}
        ></ModalEditProduct>
      </>
    );
  }
}

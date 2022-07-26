import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
		name: 'userSlice',
    initialState: "Jordi",
    reducers: {
        changeUser: (state, action) => {
          return action.payload;
        }
    }
})

//actions:
//1. crear la accion en el slice
//2. exportar la accion
//3. importarla en donde la vayamos a usar
//4. Importar y ejecutar useDispatch 
//5. despachar la accion

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;
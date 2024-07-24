import { Navigate, Outlet, useParams } from "react-router-dom"
import { Note } from "../../types"


const Layout = ({notes}:{notes:Note[]}) => {
    //url'deki  id'yi al
    const {id} = useParams()

    //notes dizisinde elemani ara
   const found = notes.find((i) => i.id === id)

    //bulamassa anasayfaya yonlendir
    if(!found)return <Navigate to="/" replace/>





    //parent route icinde alt routlari Outlet ile gosteririz(renderlariz).
    //outlete context ile prop gonderip kullanicamiz yerde useOutletContext ile aliriz.
  return <Outlet context={found}/>
}

export default Layout

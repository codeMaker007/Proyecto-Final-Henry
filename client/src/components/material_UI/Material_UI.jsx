import { Icon } from "@material-ui/core";
// import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";


const Material = () => {
    return (
        <div>
            <h2> Hice esta ruta porque quizas nos puede servir para ir introduciendo botones o iconos que vayamos viendo que nos pueden servir para la pagina</h2>
            <h3 >para instalar Material UI hay que instalar </h3>
            <p>npm install @material-ui/core</p>
            <p>npm install @material-ui/icons</p>

            <h5>Hay que hacer una carpeta con lso estilos pre diseñados.. tipo que entendemos por color primary, etc.. y asi despues lo usamos en toda la pagina</h5>
            <h5> Hay una forma de hacer navbar, botones, iconos, botones con iconos, etc..</h5>

            <Button color="secondary" variant="contained">  PROBANDO </Button>

            <Icon color="secondary" variant="contained"> room</Icon>
            <Icon >  addLocation </Icon>
            <Icon >  admin_panel_settings </Icon>
            <Icon >  call </Icon>

            <Icon >  close </Icon>
            <Icon >  currency_exchange </Icon>
            <Icon >  delete </Icon>
            <Icon >  discount </Icon>

            <Icon >  grade </Icon>
            <Icon >  house </Icon>
            <Icon >  keyboard_arrow_left </Icon>
            <Icon >  keyboard_arrow_right </Icon>

            <Icon >  local_grocery_store </Icon>
            <Icon >  shopping_cart </Icon>
            <Icon >  star </Icon>
            <Icon >  toggle_off </Icon>

            <Icon >  toggle_on </Icon>
            <Icon >  visibility </Icon>
            <Icon >  visibility_off </Icon>
            <Icon >  chat </Icon>

        </div>
        
    )
}

export default Material;
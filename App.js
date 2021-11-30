
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assetss/css/login.css';


function App() {

  return (
    
                      <div class="wrapper fadeInDown" >
                      <div id="formContent">
                      

                      
                      

                      
                        <form>
                          <input type="text" id="login" class="fadeIn second" name="login" placeholder="Nombre"></input><br/>
                          <br/> <input type="text" id="password" class="fadeIn third" name="login" placeholder="Apellido"></input><br/>
                          <br/><input type="text" id="login" class="fadeIn second" name="login" placeholder="Correo"></input><br/>
                          <br/> <input type="text" id="password" class="fadeIn third" name="login" placeholder="Contraseña"></input><br/>
                          <br/><input type="submit" class="fadeIn fourth" value="Ingresar"></input>
                        </form>

                      
                        <div id="formFooter">
                          <a class="underlineHover" href="#">¿Olvidaste tu contraseña?</a>
                        </div>

                      </div>
                    </div>              
                                                              
  );
}

export default App;

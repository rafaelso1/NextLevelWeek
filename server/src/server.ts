//rota, endereço completo da aplicação
//recurso, entidade que estamos acessando no sistema

//GET: MÉTODO DE BUSCAR ALGO
//POST: MÉTODO DE ENVIAR ALGO
//PUT: ATUALIZAR UMA INFORMAÇÃO EXISTENTE NO BACK-END
//DELETE: REMOVER UMA INFOORMAÇÃO NO BACK-END

// Request-Param: Parâmetros que vem na própria rota que identificam um recurso
// Query-Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request-Body: Parâmetros para criação/atualização de informações

//Framework knex
// query fácil: kner('users').where('name','Rafael').select('*')
import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
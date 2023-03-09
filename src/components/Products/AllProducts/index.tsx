import { useQuery, useMutation } from "react-query";
import { Link } from "react-router-dom";
import { api } from "../../../axiosConfig/api";

import { DashboardContentContainer } from "../../../styles/DefaultStyles/DashboardContentContainer";
import { Card, Content, Row } from "./style";

type Products = {
  _id: string;
  nome: string;
  modelo: string;
  tamanho: string;
  preco: number;
  quantidade: number;
  marca: string;
  descricao: string;
  url: string;
  imagens: string[];
  unidadesVendidas: number;
};

export default function AllProducts() {
  const { data, isLoading } = useQuery<Products[]>(["allProducts"],
    async () => {
      const response = await api.get("products");
      return response.data;
    },
    {
      staleTime: 1000 * 60 * 5, // Cinco minutos até atualizar os dados novamente
    }
  );

  return (
    <DashboardContentContainer>
      <Content>
        {data &&
          data.map((item) => {
            return (
              <Card key={item._id}>
                <Row>
                  <img src={item.url} alt={item.nome} />
                </Row>

                <Row>
                  <div>
                    <h3>
                      {item.nome} <span>{item.marca}</span>
                    </h3>
                    <h4>
                      Price:
                      <span>
                        {" "}
                        {item.preco.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </h4>
                    <h4>
                      Quantity: <span>{item.quantidade}</span>
                    </h4>
                    <button>Edit</button>
                    <Link to={`${item.nome}`}>Ver mais</Link>
                  </div>
                </Row>
              </Card>
            );
          })}
      </Content>
    </DashboardContentContainer>
  );
}

import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const FoodIndex = () => {
    type Food = {
        id: number;
        name: string;
        price: number;
        img: string;
        category_id: number;
    };

    const [foods, setFoods] = React.useState<Food[]>([]);

    const loadFoods = async () => {
        const result = await axios.get('http://localhost:5000/foods');
        setFoods(result.data);
    }

    React.useEffect(() => {
        loadFoods();
    }, []);

  return (
    <div>
      <div className="container mt-4">
                <div className="card container">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Danh sách món ăn</h3>
                            </div>
                            <div className="col-md-6">
                                <Link to="/foods/create" className="btn btn-primary float-end">Thêm mới</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center align-middle">STT</th>
                                    <th className="text-center align-middle">Tên món</th>
                                    <th className="text-center align-middle">Giá</th>
                                    <th className="text-center align-middle">Hình ảnh</th>
                                    <th className="text-center align-middle">Thao tác</th>
                                </tr>
                            </thead>

                            <tbody >
                                {
                                    foods.map((food, index) => (
                                        <tr key={food.id}>
                                        <td className="text-center align-middle">{index+1}</td>
                                        <td className="text-center align-middle">{food.name}</td>
                                        <td className="text-center align-middle">{food.price}</td>
                                        <td className="text-center align-middle">
                                            <img src={food.img} style={{ width: 70, height: 70, marginLeft: '20%', borderRadius: '50%' }} alt="Img" />
                                        </td>
                                        <td className="text-center align-middle">
                                            <a href=""><i className="fa-solid fa-eye"></i></a>
                                            <Link to={`/foods/edit/${food.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <a href="#" data-toggle="modal" data-target="#A{{ $user->id }}"><i className="fa-solid fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                    ))
                                }  
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FoodIndex

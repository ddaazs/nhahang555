import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreateFood = () => {
    let navigate = useNavigate();
    type Category = {
        id: number;
        name: string;
    };

    type Food = {
        id?: number;
        name?: string;
        price?: number;
        img?: string;
        category_id?: number;
    };

    const [categories, setCategories] = React.useState<Category[]>([]);
    const [food, setFood] = React.useState<Food>({});

    const loadCategories = async () => {
        const result = await axios.get('http://localhost:5000/categories');
        setCategories(result.data);
    }

    const saveFood = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/foods', food);
        navigate('/foods');
    }

    const handleChage = (e: any) => {
        setFood({...food, [e.target.value] : e.target.value});
    }

    React.useEffect(() => {
        loadCategories();
    }, []);

  return (
    <div>
      <section className="content bg-white" style={{ height: "85vh" }}>
            <h1 className="text-center text-dark">Thêm món ăn</h1>

            <div className="container-fluid col-8">
                <div className="row">
                    <div className="col-sm">
                        <form onSubmit={e => saveFood(e)}>
                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Tên món:</label>
                                <input className="form-control" type="text" name="name" id="" value={food.name} onChange={e => handleChage(e)}/>
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Giá:</label>
                                <input className="form-control" name="price" id="" value={food.price} onChange={e => handleChage(e)}/>
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Hình ảnh:</label>
                                <input className="form-control" type="text" name="img" id="" value={food.img} onChange={e => handleChage(e)}/>
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="category_id">Danh mục:</label>
                                <select name='category_id' className="form-control" onChange={e => handleChage(e)}>
                                    {
                                        categories.map((category, index) =>  (
                                            <option className="form-control" value={category.id}>{category.name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="form-group  float-end ">
                                <Link to="/foods" className="btn btn-secondary ">Back</Link>
                                <input type="submit" value="Create" className="btn btn-primary" name="btAdd" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CreateFood

import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const CreateFood = () => {
    type Category = {
        id: number;
        name: string;
    };

    const [categories, setCategories] = React.useState<Category[]>([]);

    const loadCategories = async () => {
        const result = await axios.get('http://localhost:5000/categories');
        setCategories(result.data);
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
                        <form>
                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Tên món:</label>
                                <input className="form-control" type="text" name="name" id="" value="" />
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Giá:</label>
                                <input className="form-control" name="price" id="" value="" />
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Hình ảnh:</label>
                                <input className="form-control" type="text" name="img" id="" value="" />
                            </div>

                            <div className="input-group mt-3 mb-3">
                                <label className="input-group-text" htmlFor="">Danh mục:</label>
                                <select className="form-control">
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

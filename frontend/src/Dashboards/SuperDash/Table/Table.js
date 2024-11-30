import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const initialData = [
  { id: 1, firstName: 'Galata', lastName: 'Waqo', email: 'galata.waqo@example.com', age: 28, sex: 'Male' },
  { id: 2, firstName: 'Wabi', lastName: 'Muleta', email: 'wabi.muleta@example.com', age: 34, sex: 'Male' },
  { id: 3, firstName: 'Firaol', lastName: 'Fikadu', email: 'firaol.fikadu@example.com', age: 22, sex: 'Male' },
  { id: 4, firstName: 'Chaltu', lastName: 'Buli', email: 'chaltu.buli@example.com', age: 30, sex: 'Female' },
  { id: 5, firstName: 'Jalane', lastName: 'Gemeda', email: 'jalane.gemeda@example.com', age: 25, sex: 'Female' },
];

function Table() {
  const [data, setData] = useState(initialData);
  const [editingId, setEditingId] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [filters, setFilters] = useState({ firstName: '', lastName: '', email: '', age: '', sex: '' });

  const formik = useFormik({
    initialValues: { firstName: '', lastName: '', email: '', age: '', sex: '' },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email format').required('Required'),
      age: Yup.number().required('Required').positive().integer(),
      sex: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      if (editingId) {
        setData(data.map(item => (item.id === editingId ? { ...values, id: editingId } : item)));
      } else {
        setData([...data, { ...values, id: Date.now() }]);
      }
      formik.resetForm();
      setEditingId(null);
    },
  });

  const handleEdit = (item) => {
    setEditingId(item.id);
    formik.setValues(item);
  };

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredData = data.filter(item => {
    return (
      item.firstName.toLowerCase().includes(filters.firstName.toLowerCase()) &&
      item.lastName.toLowerCase().includes(filters.lastName.toLowerCase()) &&
      item.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      (filters.age ? item.age === Number(filters.age) : true) &&
      (filters.sex ? item.sex === filters.sex : true)
    );
  });

  return (
    <div className="container-fluid mt-2">
      <h2>User Table</h2>

      <div className="filter-section mb-4">
        <input
          name="firstName"
          placeholder="Filter by First Name"
          className="form-control mt-2"
          onChange={handleFilterChange}
          value={filters.firstName}
        />
        <input
          name="lastName"
          placeholder="Filter by Last Name"
          className="form-control mt-2"
          onChange={handleFilterChange}
          value={filters.lastName}
        />
        <input
          name="email"
          placeholder="Filter by Email"
          className="form-control mt-2"
          onChange={handleFilterChange}
          value={filters.email}
        />
        <input
          name="age"
          type="number"
          placeholder="Filter by Age"
          className="form-control mt-2"
          onChange={handleFilterChange}
          value={filters.age}
        />
        <select
          name="sex"
          className="form-control mt-2"
          onChange={handleFilterChange}
          value={filters.sex}
        >
          <option value="">Filter by Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button className="btn btn-primary mt-2" onClick={() => setShowTable(!showTable)}>
          {showTable ? 'Hide Table' : 'Show Table'}
        </button>
      </div>

      {showTable && (
        <>
          <form onSubmit={formik.handleSubmit} className="mb-4">
            <div className="form-row">
              <div className="form-group col-md-3">
                <input
                  name="firstName"
                  placeholder="First Name"
                  className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                <div className="invalid-feedback">{formik.errors.firstName}</div>
              </div>
              <div className="form-group col-md-3">
                <input
                  name="lastName"
                  placeholder="Last Name"
                  className={`form-control ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                <div className="invalid-feedback">{formik.errors.lastName}</div>
              </div>
              <div className="form-group col-md-3">
                <input
                  name="email"
                  placeholder="Email"
                  className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <div className="invalid-feedback">{formik.errors.email}</div>
              </div>
              <div className="form-group col-md-2">
                <input
                  name="age"
                  type="number"
                  placeholder="Age"
                  className={`form-control ${formik.touched.age && formik.errors.age ? 'is-invalid' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.age}
                />
                <div className="invalid-feedback">{formik.errors.age}</div>
              </div>
              <div className="form-group col-md-1">
                <select
                  name="sex"
                  className={`form-control ${formik.touched.sex && formik.errors.sex ? 'is-invalid' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sex}
                >
                  <option value="">Select Sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <div className="invalid-feedback">{formik.errors.sex}</div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              {editingId ? 'Update' : 'Add'}
            </button>
          </form>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(item => (
                <tr key={item.id}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.sex}</td>
                  <td>
                    <button onClick={() => handleEdit(item)} className="btn btn-warning btn-sm">Edit</button>
                    <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Table;
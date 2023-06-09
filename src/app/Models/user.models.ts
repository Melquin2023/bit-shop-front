export class User {
  //atributos
  active?: boolean;
  address?: string;
  createdAt?: string;
  dateBirth?: string;
  email?: string;
  id?: string;
  lastName?: string;
  name?: string;
  password?: string;
  paymentMethods?: any[];
  phoneNumber?: string;
  role?: string;
  updatedAt?: string;
  username?: string;
  _id?: string;

  constructor(
    active = false,
    address = '',
    createdAt = '',
    dateBirth = '',
    email = '',
    id = '',
    lastName = '',
    name = '',
    password = '',
    paymentMethods = [],
    phoneNumber = '',
    role = '',
    updatedAt = '',
    username = '',
    _id = ''
  ) {
    this.active = active;
    this.address = address;
    this.createdAt = createdAt;
    this.dateBirth = dateBirth;
    this.email = email, 
    this.id = id;
    this.lastName = lastName;
    this.name = name;
    this.password = password;
    this.paymentMethods = paymentMethods;
    this.phoneNumber = phoneNumber;
    this.role = role;
    this.updatedAt = updatedAt;
    this.username = username;
    this._id = _id;
  }
}

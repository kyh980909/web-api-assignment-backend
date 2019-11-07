import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const Account = new Schema({
  username: String,
  password: String,
  created: { type: Date, default: Date.now }
});

Account.methods.generateHash = password => {
  return bcrypt.hashSync(password, 8);
};

Account.methods.validateHash = password => {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('account', Account);

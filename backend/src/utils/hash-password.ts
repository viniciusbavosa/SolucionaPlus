import bcrypt from "bcrypt";

const encrypt = {
  salt: 10,

  async hashPassword(password: string) {
    return await bcrypt.hash(password, this.salt);
  },

  async comparePassword(plainPassword: string, hash: string) {
    return await bcrypt.compare(plainPassword, hash);
  }

};

export default encrypt;
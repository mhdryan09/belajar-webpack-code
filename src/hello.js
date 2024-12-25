import _ from "lodash";

const mahasiswa = [
	{
		nama: "Rudi",
		email: "rudi@gmail.com",
		jurusan: "Teknik Informatika",
	},
	{
		nama: "Andi",
		email: "andi@gmail.com",
		jurusan: "Teknik Kimia",
	},
	{
		nama: "Rina",
		email: "rina@gmail.com",
		jurusan: "Teknik Industri",
	},
];

const mhs = _.find(mahasiswa, { nama: "Rudi" });
console.log("mhs", mhs);

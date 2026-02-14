*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial, sans-serif;
}

body{
  background:#0a0f2c;
  color:white;
  padding:20px;
}

.menu{
  text-align:center;
  margin-bottom:30px;
}

.menu button{
  padding:10px 20px;
  border:none;
  border-radius:30px;
  margin:5px;
  cursor:pointer;
  background:rgba(255,255,255,0.08);
  color:white;
  transition:0.3s;
}

.menu button.active,
.menu button:hover{
  background:linear-gradient(90deg,#7b5cff,#9d4dff);
}

.sub-menu{
  text-align:center;
  margin-bottom:20px;
}

.sub-menu button{
  padding:8px 15px;
  border:none;
  border-radius:20px;
  margin:5px;
  cursor:pointer;
  background:rgba(255,255,255,0.05);
  color:white;
  transition:0.3s;
}

.sub-menu button.active,
.sub-menu button:hover{
  background:#7b5cff;
}

.section{
  margin-bottom:40px;
}

.grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap:15px;
}

.card{
  background:rgba(255,255,255,0.05);
  padding:15px;
  border-radius:15px;
  cursor:pointer;
  transition:0.3s;
}

.card:hover{
  background:rgba(123,92,255,0.4);
  transform:translateY(-5px);
}

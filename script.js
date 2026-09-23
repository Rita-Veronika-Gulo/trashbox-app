function showRegister(){document.getElementById('loginForm').style.display='none';document.getElementById('registerForm').style.display='block';}
function showLogin(){document.getElementById('registerForm').style.display='none';document.getElementById('loginForm').style.display='block';}

function doLogin(){
  var u=document.getElementById('lu').value.trim(), p=document.getElementById('lp').value.trim();
  var err=document.getElementById('loginErr');
  if(!u||!p){err.style.display='block';return;}
  err.style.display='none';
  enterApp();
}
function doRegister(){
  var u=document.getElementById('ru').value.trim(), e=document.getElementById('re').value.trim(), p=document.getElementById('rp').value.trim();
  var err=document.getElementById('regErr');
  if(!u||!e||!p){err.style.display='block';return;}
  err.style.display='none';
  enterApp();
}
function enterApp(){
  document.getElementById('auth').style.display='none';
  document.getElementById('app').style.display='block';
}
function logout(){
  document.getElementById('app').style.display='none';
  document.getElementById('auth').style.display='flex';
  showLogin();
}

var titles={dashboard:'Dashboard',sensor:'Data Sensor',nutrisi:'Nutrisi Tanah',pupuk:'Kapasitas Pupuk',
  riwayat:'Riwayat',notifikasi:'Notifikasi',alat:'Manajemen Alat',pengaturan:'Pengaturan'};

document.querySelectorAll('nav.side a[data-view]').forEach(function(a){
  a.addEventListener('click',function(e){
    e.preventDefault();
    var key=a.getAttribute('data-view');
    document.querySelectorAll('nav.side a[data-view]').forEach(function(x){x.classList.remove('active');});
    a.classList.add('active');
    document.querySelectorAll('main .view').forEach(function(v){v.hidden = (v.getAttribute('data-view')!==key);});
    document.getElementById('headTitle').textContent=titles[key];
    document.getElementById('sideNav').classList.remove('open');
    window.scrollTo(0,0);
  });
});

document.querySelectorAll('.toggle').forEach(function(t){
  t.addEventListener('click',function(){t.classList.toggle('off');});
});
document.querySelectorAll('.pill-group button').forEach(function(b){
  b.addEventListener('click',function(){
    b.parentElement.querySelectorAll('button').forEach(function(x){x.classList.remove('active');});
    b.classList.add('active');
  });
});
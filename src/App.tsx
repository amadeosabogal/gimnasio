
import { 
  Search, User, Heart, ShoppingCart, Flame, ChevronRight, 
  ShieldCheck, Activity, Truck, RefreshCcw, HeadphonesIcon, 
  Star, Mail, Lock
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Topbar */}
      <div className="topbar">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flame size={14} fill="currentColor" />
            <span>OFERTA DE VERANO: HASTA 40% DSCTO EN TODA LA TIENDA + ENVÍO GRATIS EN PEDIDOS MAYORES A S/ 150</span>
          </div>
          <div className="topbar-countdown">
            <span>TERMINA EN:</span>
            <div className="countdown-timer">
              <div className="countdown-item">
                <span className="countdown-value">02</span>
                <span className="countdown-label">DÍAS</span>
              </div>
              <span className="countdown-value">:</span>
              <div className="countdown-item">
                <span className="countdown-value">18</span>
                <span className="countdown-label">HRS</span>
              </div>
              <span className="countdown-value">:</span>
              <div className="countdown-item">
                <span className="countdown-value">45</span>
                <span className="countdown-label">MINS</span>
              </div>
              <span className="countdown-value">:</span>
              <div className="countdown-item">
                <span className="countdown-value">32</span>
                <span className="countdown-label">SEGS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <Flame className="logo-icon" size={24} fill="currentColor" />
            <h1>POWER<br/>PERFORM</h1>
          </div>
          
          <ul className="nav-links">
            <li><a href="#shop">TIENDA</a></li>
            <li><a href="#proteins">PROTEÍNAS</a></li>
            <li><a href="#creatine">CREATINAS</a></li>
            <li><a href="#preworkout">PRE-ENTRENOS</a></li>
            <li><a href="#vitamins">VITAMINAS</a></li>
            <li><a href="#sale" className="text-primary">OFERTAS</a></li>
            <li><a href="#new">NOVEDADES</a></li>
          </ul>

          <div className="nav-icons">
            <Search size={20} className="cursor-pointer" />
            <User size={20} className="cursor-pointer" />
            <Heart size={20} className="cursor-pointer" />
            <div className="cart-icon-wrapper cursor-pointer">
              <ShoppingCart size={20} />
              <span className="cart-badge">2</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-accent"></div>
        <img 
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2000&auto=format&fit=crop" 
          alt="Atleta" 
          className="hero-image"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 20%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%)' }}
        />
        
        <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
          <div className="hero-content">
            <h1 className="hero-title">
              <span style={{ color: 'white' }}>ENTRENA DURO.</span><br/>
              <span className="text-primary">RINDE MÁS FUERTE.</span>
            </h1>
            <p className="hero-subtitle">
              Suplementos deportivos de alta gama y de calidad premium<br/>
              para llevar tu rendimiento al siguiente nivel.
            </p>
            <div className="hero-actions flex gap-4">
              <button className="btn-primary">COMPRAR AHORA</button>
              <button className="btn-outline">EXPLORAR COLECCIÓN</button>
            </div>

            <div className="hero-features">
              <div className="hero-feature-item">
                <ShieldCheck size={24} />
                <div className="hero-feature-text">
                  <span className="hero-feature-title">CALIDAD PREMIUM</span>
                  <span>Hecho para durar</span>
                </div>
              </div>
              <div className="hero-feature-item">
                <Activity size={24} />
                <div className="hero-feature-text">
                  <span className="hero-feature-title">ALTO RENDIMIENTO</span>
                  <span>Ropa que se mueve contigo</span>
                </div>
              </div>
              <div className="hero-feature-item">
                <Truck size={24} />
                <div className="hero-feature-text">
                  <span className="hero-feature-title">ENVÍO RÁPIDO Y GRATIS</span>
                  <span>En pedidos mayores a S/ 150</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right-text" style={{ position: 'absolute', right: '8%', top: '25%', zIndex: 4, textAlign: 'right' }}>
          <h2 style={{ fontSize: '3rem', fontStyle: 'italic', lineHeight: 1, marginBottom: '0.5rem' }}>
            EQUÍPATE.<br/>PRESÉNTATE.
          </h2>
          <h2 style={{ fontSize: '3rem', fontStyle: 'italic', color: '#cc0000', lineHeight: 1 }}>
            NUNCA<br/>TE RINDAS.
          </h2>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="section-padding container">
        <div className="text-center mb-8" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">COMPRAR POR <span className="text-primary">CATEGORÍA</span></h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', margin: '1rem auto' }}></div>
        </div>

        <div className="category-grid">
          {[
            { title: 'PROTEÍNAS', img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&auto=format&fit=crop' },
            { title: 'CREATINAS', img: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=500&auto=format&fit=crop' },
            { title: 'PRE-ENTRENOS', img: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=500&auto=format&fit=crop' },
            { title: 'AMINOÁCIDOS', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop' },
            { title: 'QUEMADORES', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&auto=format&fit=crop' },
            { title: 'VITAMINAS', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop' }
          ].map((cat, i) => (
            <div className="category-card" key={i}>
              <div className="category-image-container">
                <img src={cat.img} alt={cat.title} />
              </div>
              <div className="category-info">
                <h3>{cat.title}</h3>
                <p className="flex items-center justify-center gap-2">COMPRAR AHORA <ChevronRight size={12}/></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding container" style={{ paddingTop: '0' }}>
        <div className="section-header">
          <div>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>PRODUCTOS <span className="text-primary">DESTACADOS</span></h2>
          </div>
          <button className="btn-outline-dark" style={{ padding: '0.5rem 1rem' }}>VER TODO <ChevronRight size={16}/></button>
        </div>

        <div className="products-grid">
          {[
            { badge: 'MÁS VENDIDO', title: '100% Whey Gold Standard 5 Lbs', price: 'S/ 299.90', old: '', rating: 456 },
            { badge: '', title: 'Creatina Monohidratada 500g', price: 'S/ 149.90', old: '', rating: 389 },
            { badge: 'OFERTA', title: 'Pre-Entreno C4 Ripped 30 Serv', price: 'S/ 119.90', old: 'S/ 159.90', rating: 312 },
            { badge: '-20%', title: 'BCAA 1000 - 400 Cápsulas', price: 'S/ 129.90', old: 'S/ 159.90', rating: 215 },
            { badge: '', title: 'Lipo 6 Black Ultra Concentrado', price: 'S/ 139.90', old: '', rating: 278 }
          ].map((prod, i) => (
            <div className="product-card" key={i}>
              {prod.badge && <span className="product-badge" style={{ backgroundColor: prod.badge === 'OFERTA' || prod.badge.includes('%') ? '#ff1a1a' : '#000' }}>{prod.badge}</span>}
              <div className="product-image">
                <img src={`https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=300&h=300&fit=crop&q=80`} style={{ mixBlendMode: 'multiply' }} alt={prod.title} />
              </div>
              <h4 className="product-title">{prod.title}</h4>
              <div className="product-price-row">
                <span className="product-price text-primary">{prod.price}</span>
                {prod.old && <span className="product-price-old">{prod.old}</span>}
              </div>
              <div className="product-rating">
                <div className="flex">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="star-icon" size={12} />)}
                </div>
                <span className="rating-count">({prod.rating})</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gym Equipment Section */}
      <section className="section-padding container" style={{ paddingTop: '0' }}>
        <div className="text-center mb-8" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">EQUIPAMIENTO <span className="text-primary">DEL GIMNASIO</span></h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', margin: '1rem auto' }}></div>
          <p style={{ color: '#666', marginTop: '1rem' }}>Conoce nuestras máquinas de última generación disponibles en tu local más cercano.</p>
        </div>

        <div className="category-grid">
          {[
            { title: 'ZONA CARDIO', img: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format&fit=crop' },
            { title: 'RACKS DE SENTADILLAS', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop' },
            { title: 'PRENSA DE PIERNAS', img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=500&auto=format&fit=crop' },
            { title: 'POLEAS CRUZADAS', img: 'https://images.unsplash.com/photo-1596357395217-80de13130e92?w=500&auto=format&fit=crop' },
            { title: 'ZONA PESO LIBRE', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop' },
            { title: 'MÁQUINAS DE REMO', img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop' }
          ].map((machine, i) => (
            <div className="category-card" key={i}>
              <div className="category-image-container">
                <img src={machine.img} alt={machine.title} />
              </div>
              <div className="category-info">
                <h3>{machine.title}</h3>
                <p className="flex items-center justify-center gap-2">VER DETALLES <ChevronRight size={12}/></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="container">
          <div className="promo-content-wrapper">
            <div className="promo-left">
              <h2>NUEVA COLECCIÓN</h2>
              <h2 className="text-primary">CREADOS DIFERENTE.</h2>
              <p>Ingeniería para atletas.<br/>Diseñados para destacar.</p>
              <button className="btn-primary">COMPRAR LA COLECCIÓN</button>
            </div>
            <div className="promo-center">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop" alt="Modelos" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to top, transparent, black 10%, black 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to top, transparent, black 10%, black 100%)', WebkitMaskComposite: 'source-in', maskComposite: 'intersect' }} />
            </div>
            <div className="promo-right">
              <h2>NUEVO<br/>LANZAMIENTO</h2>
              <h3>ENTRENA. COMPITE. GANA.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Block */}
      <section className="container section-padding">
        <div className="features-block">
          <div className="features-grid">
            <div className="feature-col">
              <div className="feature-icon-wrapper"><ShieldCheck size={32} /></div>
              <h4>CALIDAD PREMIUM</h4>
              <p>Materiales de primera calidad<br/>para máxima durabilidad.</p>
            </div>
            <div className="feature-col">
              <div className="feature-icon-wrapper"><Activity size={32} /></div>
              <h4>MAYOR RENDIMIENTO</h4>
              <p>Diseñado para apoyar<br/>cada uno de tus movimientos.</p>
            </div>
            <div className="feature-col">
              <div className="feature-icon-wrapper"><Truck size={32} /></div>
              <h4>ENVÍO RÁPIDO Y GRATIS</h4>
              <p>Envío gratis en pedidos<br/>mayores a S/ 150.</p>
            </div>
            <div className="feature-col">
              <div className="feature-icon-wrapper"><RefreshCcw size={32} /></div>
              <h4>DEVOLUCIONES FÁCILES</h4>
              <p>30 días para cambios y<br/>devoluciones sin problemas.</p>
            </div>
            <div className="feature-col">
              <div className="feature-icon-wrapper"><HeadphonesIcon size={32} /></div>
              <h4>SOPORTE 24/7</h4>
              <p>Estamos aquí para ti,<br/>en todo momento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section-padding">
        <div className="container">
          <div className="text-center mb-8" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title">ATLETAS <span className="text-primary">CONFÍAN EN NOSOTROS</span></h2>
          </div>

          <div className="testimonial-cards">
            {[
              { name: 'JAKE SMITH', role: 'Atleta de CrossFit', quote: '"El equipo de PowerPerform es mi favorito. La calidad está a otro nivel y me impulsa a rendir al máximo."', img: 'https://i.pravatar.cc/150?img=11' },
              { name: 'SARAH JOHNSON', role: 'Entrenadora de Fitness', quote: '"Elegante, cómodo y hecho para entrenamiento serio. Me siento imparable usando PowerPerform."', img: 'https://i.pravatar.cc/150?img=5' },
              { name: 'MIKE THOMPSON', role: 'Fisicoculturista', quote: '"Desde el gimnasio hasta la calle, la ropa se ve genial y soporta entrenamientos intensos como ninguna otra."', img: 'https://i.pravatar.cc/150?img=12' }
            ].map((test, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, idx) => <Star key={idx} fill="var(--primary)" color="var(--primary)" size={16} />)}
                </div>
                <p className="testimonial-quote">{test.quote}</p>
                <div className="testimonial-author">
                  <img src={test.img} alt={test.name} className="author-img" />
                  <div className="author-info">
                    <h4>{test.name}</h4>
                    <p>{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2" style={{ marginTop: '2rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#666' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#666' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#666' }}></div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-bar">
        <div className="container newsletter-content">
          <div className="newsletter-text">
            <Mail size={32} />
            <div>
              <h3>ÚNETE AL MOVIMIENTO</h3>
              <p>Regístrate para ofertas exclusivas, novedades y consejos fitness.</p>
            </div>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Ingresa tu correo electrónico" />
            <button>SUSCRIBIRSE</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-logo-col">
              <div className="logo">
                <Flame className="logo-icon" size={24} fill="currentColor" />
                <h2 style={{ fontSize: '1.25rem', marginBottom: 0, lineHeight: 0.9 }}>POWER<br/>PERFORM</h2>
              </div>
              <p>Suplementos de grado premium y fórmulas avanzadas diseñadas para ayudarte a entrenar más duro, rendir más fuerte y alcanzar tus metas.</p>
              <div className="social-links">
                <a href="#" className="social-icon"><FaFacebook size={16} fill="currentColor" /></a>
                <a href="#" className="social-icon"><FaInstagram size={16} /></a>
                <a href="#" className="social-icon"><FaYoutube size={16} /></a>
                <a href="#" className="social-icon"><FaTiktok size={16} /></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>TIENDA</h4>
              <ul>
                <li><a href="#">Todas las Proteínas</a></li>
                <li><a href="#">Creatinas</a></li>
                <li><a href="#">Pre-Entrenos</a></li>
                <li><a href="#">Aminoácidos</a></li>
                <li><a href="#">Vitaminas</a></li>
                <li><a href="#">Ofertas</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>COMPAÑÍA</h4>
              <ul>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Nuestra Misión</a></li>
                <li><a href="#">Empleos</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Afiliados</a></li>
                <li><a href="#">Contáctanos</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>ATENCIÓN AL CLIENTE</h4>
              <ul>
                <li><a href="#">Información de Envío</a></li>
                <li><a href="#">Cambios y Devoluciones</a></li>
                <li><a href="#">Guía de Tallas</a></li>
                <li><a href="#">Preguntas Frecuentes</a></li>
                <li><a href="#">Rastrear tu Pedido</a></li>
                <li><a href="#">Centro de Ayuda</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>ACEPTAMOS</h4>
              <div className="payment-methods">
                <div className="payment-icon"></div>
                <div className="payment-icon"></div>
                <div className="payment-icon"></div>
                <div className="payment-icon"></div>
              </div>
              <div className="secure-shopping">
                <Lock size={16} />
                <div>
                  <h5>COMPRA SEGURA</h5>
                  <p>Tus datos están protegidos con encriptación SSL de 256 bits.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 PowerPerform. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

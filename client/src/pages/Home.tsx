import { Button } from "@/components/ui/button";
import { Coffee, Heart, Leaf } from "lucide-react";

/**
 * Design Philosophy: Japandi Minimalista
 * - Paleta: Marrom café (#6B4423), Bege quente (#D4A574), Verde musgo (#7A9B6F)
 * - Tipografia: Playfair Display (títulos) + Inter (corpo)
 * - Layout: Assimétrico, espaçoso, com respiração visual
 * - Interações: Suaves, refinadas, transições 200-400ms
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur">
        <div className="container py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              Café & Gatos
            </h1>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#sobre" className="hover:text-primary transition-colors duration-200">
              Sobre
            </a>
            <a href="#menu" className="hover:text-primary transition-colors duration-200">
              Menu
            </a>
            <a href="#contato" className="hover:text-primary transition-colors duration-200">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028474849/dtMxSFB2rkcD9W5aeAMKny/cafe-ambiance-FCcu9tM9DNRC9xM5hvtHLS.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container py-24 grid grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2
                className="text-5xl font-bold text-primary mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Bem-vindo ao nosso refúgio
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Um espaço aconchegante onde o café perfeito encontra a companhia felina. 
                Aqui, cada xícara é uma experiência e cada gato, um companheiro de momentos especiais.
              </p>
            </div>
            <Button className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground">
              Conheça nosso espaço
            </Button>
          </div>
          <div className="relative h-96">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028474849/dtMxSFB2rkcD9W5aeAMKny/cafe-hero-LgAUPUemdEUULakR2pAcvG.webp"
              alt="Café aconchegante"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container py-12">
        <div className="h-px bg-gradient-to-r from-transparent via-muted to-transparent" />
      </div>

      {/* About Section */}
      <section id="sobre" className="container py-20 space-y-12">
        <div className="text-center space-y-4">
          <h3
            className="text-4xl font-bold text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nossa História
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fundado em 2022, Café & Gatos nasceu da paixão por criar um espaço onde 
            a qualidade do café encontra o conforto da companhia felina.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {[
            {
              icon: Coffee,
              title: "Café Artesanal",
              description: "Grãos selecionados e torrados com cuidado, preparados por baristas experientes.",
            },
            {
              icon: Heart,
              title: "Gatos Resgatados",
              description: "Todos os nossos gatos foram resgatados e agora vivem em um ambiente seguro e amoroso.",
            },
            {
              icon: Leaf,
              title: "Sustentabilidade",
              description: "Comprometidos com práticas ecológicas em cada aspecto do nosso negócio.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-card rounded-lg border border-border hover:shadow-md transition-shadow duration-300 text-center space-y-4"
            >
              <item.icon className="w-10 h-10 text-accent mx-auto" />
              <h4
                className="text-xl font-semibold text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="container py-12">
        <div className="h-px bg-gradient-to-r from-transparent via-muted to-transparent" />
      </div>

      {/* Menu Section */}
      <section id="menu" className="container py-20">
        <div className="max-w-2xl">
          <h3
            className="text-4xl font-bold text-primary mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Menu de Bebidas
          </h3>

          <div className="space-y-8">
            {[
              {
                name: "Espresso Artesanal",
                description: "Café coado na hora com grãos premium",
                price: "R$ 8,00",
              },
              {
                name: "Cappuccino Cremoso",
                description: "Espresso com leite vaporizado e canela",
                price: "R$ 12,00",
              },
              {
                name: "Latte Aconchegante",
                description: "Espresso com leite quente e calda de caramelo",
                price: "R$ 13,00",
              },
              {
                name: "Chá de Ervas",
                description: "Seleção de chás naturais e relaxantes",
                price: "R$ 7,00",
              },
            ].map((item, idx) => (
              <div key={idx} className="pb-6 border-b border-border last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <h4
                    className="text-lg font-semibold text-primary"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.name}
                  </h4>
                  <span className="text-primary font-medium">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container py-12">
        <div className="h-px bg-gradient-to-r from-transparent via-muted to-transparent" />
      </div>

      {/* Cats Section */}
      <section className="container py-20">
        <h3
          className="text-4xl font-bold text-primary mb-12 text-center"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Nossos Companheiros Felinos
        </h3>

        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028474849/dtMxSFB2rkcD9W5aeAMKny/cafe-cats-RuxUwqLeFCzTqatFohCxoL.webp"
            alt="Nossos gatos"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
          Cada gato em nosso café tem uma história única de resgate e recuperação. 
          Convidamos você a conhecê-los e, quem sabe, levar um pouco de seu amor para casa.
        </p>
      </section>

      {/* Divider */}
      <div className="container py-12">
        <div className="h-px bg-gradient-to-r from-transparent via-muted to-transparent" />
      </div>

      {/* Contact Section */}
      <section id="contato" className="container py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <h3
              className="text-4xl font-bold text-primary mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Visite-nos
            </h3>
            <p className="text-muted-foreground">
              Estamos abertos de segunda a domingo, das 8h às 20h
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border space-y-4">
            <p className="font-medium text-primary">📍 Localização</p>
            <p className="text-muted-foreground">Rua do Café, 123 - Centro</p>

            <p className="font-medium text-primary pt-4">📞 Contato</p>
            <p className="text-muted-foreground">(11) 98765-4321</p>

            <p className="font-medium text-primary pt-4">✉️ Email</p>
            <p className="text-muted-foreground">contato@cafeegatos.com</p>
          </div>

          <Button className="w-fit mx-auto bg-primary hover:bg-primary/90 text-primary-foreground">
            Enviar mensagem
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Café & Gatos. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com ❤️ para amantes de café e gatos</p>
        </div>
      </footer>
    </div>
  );
}

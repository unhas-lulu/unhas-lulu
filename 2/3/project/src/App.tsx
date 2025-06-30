import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Star, 
  Clock, 
  CheckCircle, 
  Download, 
  Users, 
  Heart, 
  Shield, 
  Gift,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Crown,
  Baby,
  BookOpen,
  Palette,
  Target,
  X,
  Award
} from 'lucide-react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Júlia",
      image: "/foto-prova-social_0000_Camada-7.webp",
      text: "Nossa, mudou demais! Agora ele pede pra brincar no parque",
      rating: 5
    },
    {
      name: "Bruna", 
      image: "/foto-prova-social_0001_Camada-6.webp",
      text: "Ainda tá em fase de adaptação, mas já vejo melhora 👏",
      rating: 5
    },
    {
      name: "Kelly",
      image: "/foto-prova-social_0002_Camada-5.webp", 
      text: "Sim! Percebi que ele tá dormindo melhor também, ficou mais calmo e criativo nas brincadeiras kkk amei parabéns",
      rating: 5
    },
    {
      name: "Fabrícia",
      image: "/foto-prova-social_0003_Camada-4.webp",
      text: "Ficou meio perdido no primeiro dia, agora adora 🙏",
      rating: 5
    },
    {
      name: "Kamy",
      image: "/foto-prova-social_0004_Camada-3.webp",
      text: "Sim! Foi o que salvou nossas tardes aqui em casa.",
      rating: 5
    },
    {
      name: "Arlete",
      image: "/foto-prova-social_0005_Camada-2.webp",
      text: "Difícil foi escolher qual atividade fazer, ele queria todas KKKK",
      rating: 5
    }
  ];

  const whatsappConversations = [
    {
      contact: "Júlia",
      avatar: "/foto-prova-social_0000_Camada-7.webp",
      messages: [
        {
          sender: "Você",
          message: "Oi, Júlia! Como está sendo a experiência com seu filho longe das telas?",
          time: "00:38",
          isUser: true
        },
        {
          sender: "Júlia",
          message: "Nossa, mudou demais! Agora ele pede pra brincar no parque",
          time: "00:39",
          isUser: false
        },
        {
          sender: "Você", 
          message: "Que maravilha! 🤩",
          time: "00:40",
          isUser: true
        }
      ]
    },
    {
      contact: "Kelly",
      avatar: "/foto-prova-social_0002_Camada-5.webp",
      messages: [
        {
          sender: "Você",
          message: "Kelly, sentiu alguma diferença no comportamento do seu filho?",
          time: "14:22",
          isUser: true
        },
        {
          sender: "Kelly",
          message: "Sim! Percebi que ele tá dormindo melhor também, ficou mais calmo e criativo nas brincadeiras kkk amei parabéns",
          time: "14:25",
          isUser: false
        },
        {
          sender: "Você", 
          message: "Sim, tem bastante 😊",
          time: "14:26",
          isUser: true
        }
      ]
    },
    {
      contact: "Rafa",
      avatar: "/foto-prova-social_0003_Camada-4.webp",
      messages: [
        {
          sender: "Você",
          message: "Rafa, qual foi a reação dela quando você propôs algo diferente do celular?",
          time: "09:15",
          isUser: true
        },
        {
          sender: "Rafa",
          message: "Foi Luta viu! Pensei que não ia dar certo. Resmungou um pouquinho, mas quando viu a atividade foi esquecendo o celular aos poucos. É muita brincadeira nesse negócio 😂",
          time: "09:18",
          isUser: false
        }
      ]
    }
  ];

  const activities = [
    {
      title: "Atividades Sensoriais",
      description: "Brincadeiras que estimulam os sentidos",
      image: "/IMG_4038.webp"
    },
    {
      title: "Jogos Educativos",
      description: "Aprendizado através da diversão",
      image: "/IMG_4039.webp"
    },
    {
      title: "Arte e Criatividade", 
      description: "Desenvolvendo a imaginação",
      image: "/IMG_4040.webp"
    },
    {
      title: "Atividades Motoras",
      description: "Coordenação e movimento",
      image: "/IMG_4041.webp"
    }
  ];

  const kitContents = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "+100 Atividades Criativas",
      description: "Brincadeiras testadas e aprovadas por especialistas"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "50 Modelos para Imprimir",
      description: "Prontos para colorir, montar e brincar - tamanho A4"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "50 Arquivos PDF de Apoio",
      description: "Material complementar para maximizar o aprendizado"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Aulas de Implementação",
      description: "Passo a passo para aplicar cada atividade"
    }
  ];

  const faqs = [
    {
      question: "Serve pra qualquer idade?",
      answer: "Sim! O kit foi desenvolvido para crianças de 2 a 12 anos, com atividades adaptáveis para cada faixa etária."
    },
    {
      question: "Posso usar em todos os dispositivos?",
      answer: "Claro! Você terá acesso através de qualquer dispositivo - celular, tablet ou computador."
    },
    {
      question: "Preciso imprimir?",
      answer: "Algumas atividades sim, mas temos muitas opções que não precisam de impressão. Você escolhe!"
    },
    {
      question: "Preciso estar junto em todas as atividades?",
      answer: "Não! Muitas atividades são independentes, permitindo que seu filho brinque sozinho com segurança."
    },
    {
      question: "Serve pra crianças com autismo ou TDAH?",
      answer: "Sim! As atividades foram pensadas para serem inclusivas e benéficas para todas as crianças."
    },
    {
      question: "Posso compartilhar com outro responsável ou imprimir para escola?",
      answer: "O acesso é pessoal, mas você pode imprimir as atividades para uso familiar e escolar."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header com Timer */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Clock className="w-5 h-5 animate-pulse" />
            <span className="font-semibold">Oferta expira em:</span>
            <div className="flex gap-2">
              <div className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
                <span className="font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="text-xs block">horas</span>
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
                <span className="font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="text-xs block">min</span>
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
                <span className="font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="text-xs block">seg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-pink-200">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <span className="text-pink-700 font-semibold">Mais de 1000 mães já transformaram a rotina dos filhos</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Mais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">100 brincadeiras criativas</span> + 50 atividades prontas para ocupar, entreter e desenvolver seu filho
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tenha acesso a Atividades Testadas por Especialistas e Pedagogas
            </p>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/50 mb-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-800 text-lg">Tudo em um só lugar</h3>
                  <p className="text-gray-600">Fácil de usar, pronto pra salvar seu dia</p>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse">
                QUERO TER ACESSO AGORA
              </button>
            </div>
          </div>

          {/* Prova Social - Antes e Depois - IMAGENS COMPLETAS NO MOBILE */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">ANTES</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-red-600">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Birras constantes</span>
                </div>
                <div className="flex items-center gap-3 text-red-600">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Choro por telas</span>
                </div>
                <div className="flex items-center gap-3 text-red-600">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Estresse familiar</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-lg p-4">
                <img 
                  src="/imagemmm-1024x683.webp" 
                  alt="Criança estressada com tablet" 
                  className="w-full h-auto object-contain rounded-lg" 
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-center mb-6 text-green-600">DEPOIS</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span>Criatividade em alta</span>
                </div>
                <div className="flex items-center gap-3 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span>Brincadeiras saudáveis</span>
                </div>
                <div className="flex items-center gap-3 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span>Família feliz</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-lg p-4">
                <img 
                  src="/vidasemtelasprovasocial-1024x658-1-1.webp" 
                  alt="Criança feliz brincando" 
                  className="w-full h-auto object-contain rounded-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Sucesso */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            JÁ É SUCESSO ENTRE AS CRIANÇAS DO BRASIL INTEIRO
          </h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            <Users className="w-8 h-8" />
            <span className="text-xl font-semibold">+1000 famílias transformadas</span>
          </div>
        </div>
      </section>

      {/* Kit Completo */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              UM KIT COMPLETO PRA ENTRETER SEUS FILHOS A SEMANA INTEIRA —
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"> SEM PRECISAR DE TELAS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              ESTE MATERIAL FOI CRIADO PARA MANTER AS CRIANÇAS OCUPADAS COM CRIATIVIDADE, APRENDIZADO E DIVERSÃO, DE FORMA PRÁTICA E ACESSÍVEL.
            </p>
          </div>

          {/* Atividades Reais - IMAGENS COMPLETAS NO MOBILE */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-full bg-gray-100 rounded-lg p-4 mb-4">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-auto object-contain rounded-lg" 
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-12 rounded-xl text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              QUERO TER ACESSO
            </button>
          </div>
        </div>
      </section>

      {/* O que você terá */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            O QUE VOCÊ TERÁ DENTRO DO KIT
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {kitContents.map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Fotos das atividades reais - IMAGENS COMPLETAS NO MOBILE */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="w-full bg-gray-100 rounded-xl p-4 shadow-2xl">
              <img 
                src="/IMG_40379.webp" 
                alt="Atividade 1" 
                className="w-full h-auto object-contain rounded-lg" 
              />
            </div>
            <div className="w-full bg-gray-100 rounded-xl p-4 shadow-2xl">
              <img 
                src="/IMG_40802.webp" 
                alt="Atividade 2" 
                className="w-full h-auto object-contain rounded-lg" 
              />
            </div>
            <div className="w-full bg-gray-100 rounded-xl p-4 shadow-2xl">
              <img 
                src="/IMG_408022.webp" 
                alt="Atividade 3" 
                className="w-full h-auto object-contain rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conversas WhatsApp - AVATARES COMPLETOS NO MOBILE */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Veja o que as mães estão falando...
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whatsappConversations.map((conversation, index) => (
              <div key={index} className="bg-gray-900 rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
                {/* Header do WhatsApp */}
                <div className="bg-gray-800 rounded-t-2xl p-4 mb-4 -mx-6 -mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full p-1 border-2 border-green-500 flex-shrink-0">
                      <img 
                        src={conversation.avatar} 
                        alt={conversation.contact} 
                        className="w-full h-full object-contain rounded-full" 
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{conversation.contact}</h4>
                      <span className="text-green-400 text-sm">online</span>
                    </div>
                  </div>
                </div>

                {/* Mensagens */}
                <div className="space-y-4">
                  {conversation.messages.map((msg, msgIndex) => (
                    <div key={msgIndex} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs p-4 rounded-2xl ${
                        msg.isUser 
                          ? 'bg-purple-600 text-white rounded-br-sm' 
                          : 'bg-gray-700 text-white rounded-bl-sm'
                      }`}>
                        <p className="text-sm leading-relaxed">{msg.message}</p>
                        <span className="text-xs opacity-70 block mt-2">{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mãe de Sucesso - IMAGEM COMPLETA NO MOBILE */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-400 to-red-500">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="max-w-md mx-auto mb-8 bg-white/10 rounded-2xl p-4">
            <img 
              src="/maes-de-sucesso.webp" 
              alt="Mãe de Sucesso" 
              className="w-full h-auto object-contain rounded-2xl shadow-2xl" 
            />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Comprando somente hoje, você leva o Kit Mãe de Sucesso
          </h2>
          <p className="text-xl text-white/90 mb-8">
            de R$500 por apenas <span className="font-bold text-2xl">GRÁTIS</span>
          </p>
          <p className="text-lg text-white/80">
            Um guia direto e emocional pra você sair do piloto automático e assumir o controle da sua maternidade.
          </p>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Plano Básico - Branco/Cinza com X's */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Acesso Imediato</h3>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  <span className="text-lg line-through text-gray-500">R$ 97,00</span>
                  <br />
                  R$ 7
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-green-500 rounded-full p-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span>+100 Atividades Criativas</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <div className="bg-red-500 rounded-full p-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <span className="line-through">50 Modelos Prontos para colorir, montar e Brincar tamanho A4</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <div className="bg-red-500 rounded-full p-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <span className="line-through">+ 50 Arquivos em PDF de apoio</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-500 rounded-full p-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span>Área de Membros personalizada</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-500 rounded-full p-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span>Aulas de Implementação Prática</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-500 rounded-full p-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span>Garantia de 30 Dias</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                ACESSAR AGORA
              </button>

              {/* Texto de transição embaixo do botão de R$7 - POSIÇÃO CORRETA */}
              <div className="text-center mt-6 p-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl border-2 border-yellow-500 shadow-xl">
                <p className="text-lg font-bold text-white drop-shadow-lg">
                  ⚡ Mas antes de comprar... temos uma oferta AINDA MAIS vantajosa pra você! Veja logo abaixo ⚡
                </p>
              </div>
            </div>

            {/* Plano Premium - DOURADO E BONITO */}
            <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-yellow-300 relative overflow-hidden">
              {/* Efeitos de brilho dourado */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 via-orange-200/30 to-yellow-300/30 rounded-3xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-300/50 to-orange-300/50 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-300/50 to-yellow-300/50 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-3 rounded-full mb-6 shadow-lg border border-yellow-500">
                    <Crown className="w-6 h-6 text-white" />
                    <span className="text-white font-bold text-lg">ACESSO VITALÍCIO PREMIUM</span>
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                    Kit Completo Premium
                  </h3>
                  
                  <div className="text-5xl font-bold text-gray-800 mb-4">
                    <span className="text-xl line-through text-gray-500">R$ 149,90</span>
                    <br />
                    <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                      R$ 27,00
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 bg-white/70 p-4 rounded-xl backdrop-blur-sm shadow-md border border-yellow-200">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">+100 Atividades Criativas</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/70 p-4 rounded-xl backdrop-blur-sm shadow-md border border-yellow-200">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">50 Modelos Prontos para colorir, montar e Brincar tamanho A4</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/70 p-4 rounded-xl backdrop-blur-sm shadow-md border border-yellow-200">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">+ 50 Arquivos em PDF de apoio</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/70 p-4 rounded-xl backdrop-blur-sm shadow-md border border-yellow-200">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Aulas de Implementação Prática</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/70 p-4 rounded-xl backdrop-blur-sm shadow-md border border-yellow-200">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Checklists e Planners Editáveis</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gradient-to-r from-orange-200 to-yellow-200 p-5 rounded-2xl border-3 border-orange-400 shadow-xl">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full p-2">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-orange-800 text-lg">🎁 BÔNUS EXCLUSIVO: Kit Mãe de Sucesso (R$ 500)</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/70 p-4 rounded-xl backdrop-blur-sm shadow-md border border-yellow-200">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-2">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">🛡️ Garantia de 30 Dias</span>
                  </li>
                </ul>

                <button className="w-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 text-white font-bold py-6 px-8 rounded-2xl text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-3 border-yellow-300 shadow-xl">
                  ✨ QUERO O ACESSO VITALÍCIO PREMIUM AGORA ✨
                </button>
                
                <div className="text-center mt-4">
                  <div className="inline-flex items-center gap-2 text-sm text-gray-700 bg-white/50 px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">🔒 Pagamento 100% Seguro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos - AVATARES COMPLETOS NO MOBILE */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Veja o que mães estão dizendo depois de aplicar o método...
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full p-1 border-2 border-pink-300 flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-contain rounded-full" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            PERGUNTAS FREQUENTES
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-12 rounded-xl text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              TIREI MINHAS DÚVIDAS, VAMOS LÁ!
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-red-400">PIRATARIA É CRIME</h3>
          <p className="text-gray-300 leading-relaxed">
            A venda do Vida Sem Telas só pode ser realizada através deste site. Qualquer outro site onde você encontre este produto é uma FALSIFICAÇÃO e vai contra as leis. Evite falsificações e recuse conteúdos ilegais ou pirateados. NÃO adquira programas parecidos e que não são baseados em anos de estudo da psicologia comportamental. Não nos responsabilizamos por compras realizadas em outros sites.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'jordan-4-retro',
    name: 'Jordan 4 Retro Black Cat',
    subtitle: 'Black Cat',
    sku: 'CU1110-010',
    category: 'Tênis',
    brand: 'Nike',
    price: 2499,
    originalPrice: 3199,
    stock: 1,
    status: 'disponivel',
    badge: 'Grail',
    description: 'Tênis icônico Jordan 4 Retro Black Cat em estado impecável. Design totalmente preto furtivo com detalhes em relevo e conforto lendário.',
    curatorNotes: 'Flawless upper with zero creasing. Original box and all accessories included. Worn once indoors for a photoshoot. The ultimate stealth colorway in near pristine condition.',
    condition: '9.5/10 (VNDS)',
    size: 'US 10 / BR 42',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtHo_JrRXoL7_hKxGwOLt0VEGcIpYJGOQq46Ep_z6s72QG1Na7D3QSSe7wjq355xmH9zMrpSd7Zo6CjTXLk0zFZZe2J_LHaVG7FpYSvfHTALRzh8vkro_-O57MINfs8y5t3-7j5j2kIKDB9QRV6HCH78ki4nCZMdlZ0-tkGXjJGfsPuaPudy4E7s8TlFDmpi-HVNnhRb1WjLWLoTRslcCa-h-mXMYPtNnJU01d2VrlXZkkoaykArE',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBBfiSOGtLqV5w-Stqc5QnormRoH7xHs9rA2owA635tTxH-dthsC8iUNoKTkoJs8-VrhnB73xcQYL-DVR3_0ZUsgOhtRxIYMHSbO6AJqtp_08NgnHDWksNabbNDbMrq_nUmD_NX_rmhLjtHrysMlHrsHGvrhOVqFMZxx8m581b-kngcFrMOkj_xrOBAY9hJIyDfa5P6vebTsUgY6AvwJgi2GaW23suHOcFLkatux1odHNv4TeMQak',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIj8hnliCAVKM6qRh5KrbvJ8Yvvqg8EQ5oTN91kJbQA2mbh9xrYU6ax_lLL6h-pxlLf0-vEvilflRoeXSYwZJppvMs_dY8rme7XB6fi-PAvoFZqo-ZxlqFBpfV0Z2ZRfOoG0ZVnHxwNpZgG3vG0oP_yThDbnLO-2zMvt5lWRttoHF5wsPtJEJcS_gzACDZNbAo2Q-G5l3nzEmvKibZ7U4fanCji-gH-wJUAeN1vTQu3DQAM8HL-vQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZE-nehJSPzSBIUelkq81t0Yv35ptEH7Nbko_EzDL4eb0sRWrm0HHMtLoPa6iLv3_p4h37Gh8DmNBHaWjjKl6f9MfDyZKxVpWSUBHZ0NzOeFtn7EsA86Zltokm7IZdR5mrsC79MdCx_51RJF1BcQcTjMWL9gQ1tscFMbSVzlkyCffdIZWI-NGsg5doSPzSg4oUTa41o8SGuIC9pHi1M_lyBlpsyoqHjkBfdyvMrRCupiTcmERAAHk',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7VdIGmjdp1at82nO9FHJOk73VIrS7PlPFdG-jc5A-8Ye96GB3WJnNwtz9cR0H8IyC5GGiEI-s8hljIIzCFkQ3TNEdjpgLamZvDGzwRmjFbLrvr8JnkrcYbO0RpTx7-NiyR1QhgHw-9RMBN8GV7PboM5la6qZu0XB9O2pD3Df4fxJnfycgpuVFJ8IIRRkgOh1uOkdHmTmajbHEmrTPIYoIvjmzuDoxdvqLxOrGY-iO8I7WNtghp_E'
    ],
    active: true,
    featured: true,
    createdAt: '2026-08-01'
  },
  {
    id: 'air-max-alpha',
    name: 'Air Max Alpha',
    subtitle: 'Performance Sneaker',
    sku: 'LJ-SNK-001',
    category: 'Tênis',
    brand: 'Loja do Juneba Pro',
    price: 1299,
    stock: 12,
    status: 'disponivel',
    badge: 'Novo',
    description: 'Tênis de alta performance para quadras indoor com amortecimento responsivo de ar e suporte lateral reforçado.',
    condition: 'Novo (DS)',
    size: 'US 9.5 / BR 41',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdTqi24vPR4CQGtBuKXmvzxi0b72JoElkVQMRyIlZESFDK14ZxME_La-b2iaw4REgGxLs_TcqKA-rJYS-zrZqlD_RIZkjIKg2zP07kzU9vX2CinchtOKwaPbJFAkvwKdpfQ1n4boOPBWUfscFLMUMnBwBK1E4kUXp2ZBMTRve-Dk86ENiJl1PCRWOAtkc0XGnyTtxncQ0TdtPHRzWHvD_nJDOT3FnbR9K07Ywj6ckjsKTHshP3aW8'
    ],
    active: true,
    featured: true,
    createdAt: '2026-08-02'
  },
  {
    id: 'camiseta-classic-court',
    name: 'Camiseta Classic Court',
    subtitle: 'Heavyweight Cotton',
    sku: 'LJ-APP-002',
    category: 'Vestuário',
    brand: 'Juneba Athletic',
    price: 189,
    stock: 8,
    status: 'disponivel',
    badge: 'Seminovo',
    description: 'Camiseta vintage de basquete em algodão encorpado 240g com estampa exclusiva Juneba Athletic Brasil.',
    condition: '9/10 Excelente',
    size: 'L / G',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUVSFCtEoTkx3weAAKkW-ApOlB6s2hTnWdbu6aWv7NFmoJzCcqmvi5-0-Lp7wPsS8J0hcNOKEiS7XlNcmkJqYUZkTcQ5Fza6kMIGjzrEzQuHDj6OosbeleMyYhlTahduyLg_YZEsEvJMjMcvADg3JUJY9O-ThoPrZdLZ48L7efcEqR2Pe6mXkDvsgAv4d_3KC-ZSHdukKvfhk0DZC4HlQTs7Z2_n2THQeSiYVHkYgyZiEV4lr8CK8'
    ],
    active: true,
    featured: true,
    createdAt: '2026-08-03'
  },
  {
    id: 'bola-basquete-pro',
    name: 'Bola de Basquete Pro',
    subtitle: 'Official Size & Weight',
    sku: 'LJ-ACC-003',
    category: 'Acessórios',
    brand: 'Juneba Equipment',
    price: 450,
    stock: 5,
    status: 'disponivel',
    badge: 'Limitado',
    description: 'Bola oficial de couro de microfibra de alta aderência para jogos profissionais e treinos em piso de madeira.',
    condition: 'Nova Lacrada',
    size: 'Tamanho 7 (Oficial)',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIOcsQ6n431XhYBKy5PrdAa9zhbkrQFvnij7DCVmbKhsAwgzINTg70CA8xeEYC6AzwV1ZXW6Iz7rw0MyIK-4W4DvDa5uABZpHYjnt2KlEig3bMoqQY9Rr4v_dalowM1jFRp2YIEq8t_H_K6vWYlewJnNSqFiGeca2Hh4HXHMjksCDXJqaOmSu3MqFvPQcONOKphl73I4EiK8zBA8d3gchkm2_lPuPUUQRTcAiDU8ya9OZda1WF04s'
    ],
    active: true,
    featured: true,
    createdAt: '2026-08-04'
  },
  {
    id: 'aero-court-high',
    name: 'Aero Court High',
    subtitle: 'Performance Sneaker',
    sku: 'LJ-SNK-004',
    category: 'Tênis',
    brand: 'Juneba Pro',
    price: 240,
    stock: 15,
    status: 'disponivel',
    badge: 'Novo',
    description: 'Sneaker aerodinâmico cano alto com suporte de tornozelo e tecnologia de absorção de impacto.',
    condition: 'Novo',
    size: 'US 11 / BR 43',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCNhHDp9_Q6VPKkg_5ircR5xmE0rpH5OKSyqDWcCsZVsGrm6YAXIrmr_elBqtRn4cPTI8o3tXdz6oRHUukUy7sOgcqkPo6UNnzrjpZpH4cZIcGGlKELbvv2i4iJkUf-GThluxVfVBgKyyk-G6JritRF_sa99nZ3geX3-lniHkLRu80z_aqqebasjkpS3isPfW3IDRuLSqX_v2qxd0bNaeRqHinJ8X18qRKoJMIJbETaOKVz2csjW_s'
    ],
    active: true,
    featured: false,
    createdAt: '2026-08-05'
  },
  {
    id: 'tech-fleece-hoodie',
    name: 'Tech Fleece Hoodie',
    subtitle: 'Heavyweight Cotton',
    sku: 'LJ-APP-005',
    category: 'Vestuário',
    brand: 'Juneba Streetwear',
    price: 120,
    stock: 0,
    status: 'esgotado',
    description: 'Blusão moletom encorpado com capuz estruturado e bolso canguru em tecido premium.',
    condition: 'Novo',
    size: 'M',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDapsFsNmCWFd8JbcHdX3qp7j0fhE5GGLwOtJpnfo1uCwa8-C8W-2sd-IBTVvqPonAXwFP23ZhKshuzhyxK043IRmqlT2Ap04UZDp1nFAl-GyrIoywauYeXnYPU7WcR9c4jiZJoLIJSSZZF6h0tyGLBTtMwrpei0gk902UXBVszaDVNDse7qWXV9FNS4bzpI1ZlqtVobURKDaHc19kXfPhycrknq6-rkcb8jXeX8Hk7LrntNhEFmqQ'
    ],
    active: true,
    featured: false,
    createdAt: '2026-08-05'
  },
  {
    id: 'pro-series-ball',
    name: 'Pro Series Ball',
    subtitle: 'Official Size & Weight',
    sku: 'LJ-ACC-006',
    category: 'Acessórios',
    brand: 'Juneba Equipment',
    price: 85,
    stock: 0,
    status: 'vendido',
    description: 'Edição especial gravada a laser para quadras internas com gravação exclusiva.',
    condition: 'Vendido',
    size: 'Tamanho 7',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCn_XX07fnJbJdutxxR6vXrRTrBNlxRvmgXl4FctHrzmHcYqh3uu1YrnpHTQZb5Dccp0x38A2lJnWL5SR2UcHaK7PnX9umaa3w5sUycbwWrP-UDF_8CtyupNuMfHr50ngMYVtfWjF5QxrSG4vvB-pZJG1cbJN0vLkvcti5YN2FTuHv0SiMThjXT96IsAGqMoE5WdBAVS9VUVdzbhFryxi0cX5w3EICZYaBUNQXecfBHnQx8_RnHLfc'
    ],
    active: true,
    featured: false,
    createdAt: '2026-08-05'
  },
  {
    id: 'court-vision-pro-x',
    name: 'Court Vision Pro X',
    subtitle: 'Calçados • Masculino',
    sku: 'SKU-9901-CV',
    category: 'Tênis',
    brand: 'Juneba Performance',
    price: 1299,
    stock: 10,
    status: 'disponivel',
    description: 'Sneaker de alto impacto com solado gráfico e suporte avançado para armadores e alas.',
    condition: 'Novo',
    size: 'BR 41 / US 9.5',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAVPO5286JZ98QIEznlonWzEcTGwuJke45WsKmMR2qu__BMAm0gESMenz4P_MfggkqonExip9Md4KeoHhuQarUfR0iXtKkQwA-1kz8x0IGd3k3bTU1S4TgmFEafdHqMgvRjrQmzR2vThwSYGvC8koROG4EEuncvptGWCp4AF9416QykYeT0GbeNaNSjFBzx8uaMSvYayCzskFkt7uQvqdOfq_n7-YikOMNr7SFch2bOpVnl9xu0H6o'
    ],
    active: true,
    featured: false,
    createdAt: '2026-08-05'
  },
  {
    id: 'aerotech-compression',
    name: 'AeroTech Compression',
    subtitle: 'Vestuário • Performance',
    sku: 'SKU-4422-AT',
    category: 'Vestuário',
    brand: 'Juneba Pro',
    price: 349.9,
    stock: 20,
    status: 'rascunho',
    description: 'Camisa de compressão térmica para retenção de temperatura corporal e rápida evaporação de suor.',
    condition: 'Novo',
    size: 'M',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBT6212T0ozXMo3lLmkd8FsvhDLiQYKP2Ryqje7zWkPuBT7wPDbPYPeqYsdRqpTPmW-EwESKlXOpnEWCTUIKC-g9XcaSXl8Acb4YSlMx_foxDyHXWI03NMFV-RWyEW3JPeb1GGQzXOQS9eYCUMHSjFCJ3FUZisrhhZcYTrpHZzmULzbOoraOxAFuD25MMAY061hRHSn21J07-eQfKOoXpyVXEW7EimoMmIl9TFjoc_4ifwK0c5xG90'
    ],
    active: false,
    featured: false,
    createdAt: '2026-08-05'
  },
  {
    id: 'heritage-pro-series',
    name: 'Heritage Pro Series',
    subtitle: 'Equipamentos • Bolas',
    sku: 'SKU-1100-HP',
    category: 'Acessórios',
    brand: 'Juneba Equipment',
    price: 899,
    stock: 4,
    status: 'disponivel',
    description: 'Bola com acabamento pebbled vintage e costura manual reforçada para colecionadores e entusiastas.',
    condition: 'Novo em caixa comemorativa',
    size: 'Tamanho 7',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAEC47pqBYUn5xR6RY1GUP4GO4gfPGTV0ZdXhPH_DTWHMYbo_6tBOZpcPPaAqcyNkylITbmSf1s_pXGRoqFlmL2zSJgggCc0_j79hUdARoXowRoP1mbU9o71UthMwvvhfwhw3_TvRq-K64-e7kgl8S6YFOeKaH3TL7anuwwLB1aZIF23Dz5HI9z8oczuU7aobLFjy1nRJ4S0fj1PmXN7JYUhC2iOEF5hqpgw0es5w9SbUb6K_HkXcU'
    ],
    active: true,
    featured: false,
    createdAt: '2026-08-05'
  },
  {
    id: 'tenis-pro-performance-black',
    name: 'Tênis Pro Performance Black',
    subtitle: 'Performance Sneaker Indoor',
    sku: 'LJ-BB-992-BLK',
    category: 'Tênis',
    brand: 'Loja do Juneba Pro',
    price: 899.9,
    stock: 42,
    status: 'disponivel',
    description: 'O tênis definitivo para quadras indoor. Amortecimento responsivo e tração inigualável.',
    condition: 'Novo com caixa original',
    size: 'US 10 / BR 42',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDJUZYMgNuN2gga-zAMc6JzeeEzUw3ncfpHWqtOZ9C3bEN7AVrVNp5OsrjXV8p2_7PAAfU_GWj9dXYARARU9yGqSqlB-5nbqjz3-PY9KYGYfw9bU9X32tZCEG-uKL66DsTcvQIFByqL26oSqRx5mfuFGFXAHrxOuWID_yRQICV0OEOFHnHRO0GucJXarTyIxYVzio-uMdfix3UUt5jCSnBeBzVcOdw346eeU6JLlqq-3CagHxlVMt8',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCucg_AtNa9u8ubOPt_aq_ro4aoHYOeem_zyN_dgf09cdIG2QSaFHgNDfRfOUdmsMqgc6Bv6W3PzdOVFv0EhG6NmCb9uT1GhFp1ygTYvZZyURDAH0AeLvb5pWXhrFYSlfeTjXLB27rUZpRcocQ8Sd5tQQckhymUcNQhdnkl5rrAxygIH8qfeOm6RGxEsm7ToEyb6KU8HjgnDYTxwIELHDW4xScDPLDEFU9A43_Ms23zsdSVwah8KxA'
    ],
    active: true,
    featured: false,
    createdAt: '2026-08-05'
  }
];

export const BRAND_LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0zX5Kd_GdphrsoytO8uzbqG-GCySx7Wo1ojEkfnDfyRjw_E5SMCDBGeprauN545R6ZHlhAN65b46Gcgc2uxEOslPMe7EIZUybewkvDJ_BbR_IRUh8WxkPMnXbuqM43O8VO1SH2m2rttWp_HkZr-wtSg9z4WrNc6vuTDibfTRq1FXYp3FsqQoM27bRMU7kGj_EwGK4_oyYILTsxTavInSt3hhwRblW57IFpJKowGarqkbVCcRIRYk';

export const JUNEBA_PORTRAIT_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFaYg3tOsWEh7sH5W12_8acZDMYWRDBUuMRkPIVCsTd7KGrtfqZnV7CbetLJrPv8XLVjrDTzx0PF-mxHWxcnBgJ-5QLNxaBWEHYN6IttFHt0D7RSRHvPXLBgpXiADLcjJ_Stsd9YbKO4c6ijwOs0sqzhaXe_gjT5DmjE3bcAOhh-ndmGRjjX19y0_rr8TZLOMLT5sWWCoZ9UmEX4C2_VpYi2cc1AjgewxpSWsuDoOQNed7iMfs21w';

export const ORIGIN_SNEAKERS_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAKtbUPLag5EOT4rhgiCiBMoMJ4fUjJuZ-Avf5v7fwKWS1AFBcdZ1ui8IokHU6f6DW7790pPUPhPJMng7l7DWgBaSfXJBsdCGRkm6lIZ9baTZuoicicLoAxhykXlFIOjlbUlnWv4oBblxBJm-LJxtTkn9cKJYACiEofyctlQI0f3qRinWq0K7u7XZTO2N4lu-rbl4xQ2-OZyA15QunQrA73JeB1y4eI6TOAaZVqMM0Vr9fwlrYtGM';

export const ADMIN_AVATAR_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2_CYNNJp8LWziWKVO3IYH0DbDTXB94iuNfHMaNsfP5-WkZfW1yRxnNT8CQgOqwsCqmyYVjJZRMALX9xRzYHFiNSbJkJOB2NM07Pp-8yGt9JAAF7KLAeWqfLI3iKFGdQtb8EVKV8QLBmwQf7oWEQRMv44WzVUPdOywSEQsdVoeeyFkKnKGD7uPsuGuVGqvxHDc33HIba7HBJ7MVuAYOpNYTWPUfBic1HARTcm5gMQd1euffv_UC04';

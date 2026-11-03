// Catálogo ilustrativo: preço e disponibilidade serão confirmados pela equipe.
const image=(id)=>"https://drogariaglobo.vtexassets.com/arquivos/ids/"+id+"-300-300?width=300&height=300&aspect=true";
const products=[
["carmed","Carmed","Kit Carmed SOS Lábios 2x10g","Beleza","2 unidades",image("1168046")],
["huggiesxg","Huggies","Fralda Proteção Acolchoada XG","Bebê","80 unidades",image("1149857")],
["elmex","Elmex","Escova Sensitive Professional","Higiene","2 unidades",image("1169930")],
["spray","Colgate","Spray Bucal Total 12","Higiene","60 ml",image("1169008")],
["huggiesg","Huggies","Fralda Proteção Acolchoada G","Bebê","88 unidades",image("1149843")],
["protex","Protex","Sabonete Líquido Cream","Higiene","650 ml",image("1169519")],
["colgate","Colgate","Creme Dental Total Original Mint","Higiene","90 g",image("1170379")],
["solar","Theraskin","Protetor Solar Facial UV-Less FPS 70","Pele","40 g",image("1188168")],
["palmolive","Palmolive","Sabonete Líquido Luminous Oils","Higiene","650 ml",image("1170230")],
["plenitud","Plenitud","Roupa Íntima Plus Man G/XG","Saúde","16 unidades",image("1179673")],
["cetrilan","Cetrilan","Creme para Prevenção de Assaduras","Bebê","120 g",image("1188154")],
["intimus","Intimus","Absorvente Noturno Suave","Beleza","24 unidades","https://drogariaglobo.vtexassets.com/arquivos/ids/1162380-300-300?v=639092832168600000&width=300&height=300&aspect=true"]
];
const ROCHA_PRODUCTS=products.map(([id,brand,title,category,size,photo])=>({id,title,brand,category:({"Higiene":"higiene","Pele":"dermo","Bebê":"bebe","Saúde":"saude","Beleza":"beleza"})[category]||"saude",size,image:photo}));

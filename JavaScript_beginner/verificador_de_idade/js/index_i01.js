function verificar() {
    const data = new Date;
    const ano = data.getFullYear();
    const fAno = document.getElementById('txtano');//getElementById ou querySelector;
    const res = document.querySelector('div#res'); //querySelector ou getElementById (na query precisa do nome#nome);

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados inseridos e tente novamente.');
    } else {
        const fsex = document.getElementsByName('radsex');
        const idade = ano - Number(fAno.value);
        let gênero = '';
        const img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            gênero = `um Homem`;
            if (idade >= 1 && idade < 3) {
                img.setAttribute('src', '../verificador_de_idade/images/hbebe.png');// Bebê
            } else if (idade >= 3 && idade < 10) {
                img.setAttribute('src', '../verificador_de_idade/images/hcrianca.png');// Criança
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', '../verificador_de_idade/images/hadole.png');// adolescente
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', '../verificador_de_idade/images/hjovem.png');// Adulto
            } else if (idade >= 60) {
                img.setAttribute('src', '../verificador_de_idade/images/hidoso.png');// idoso
            }
        } else if (fsex[1].checked) {
            gênero = `uma Mulher`;
            if (idade >= 1 && idade < 3) {
                img.setAttribute('src', '../verificador_de_idade/images/mbebe.png');// Bebê
            } else if (idade >= 3 && idade < 10) {
                img.setAttribute('src', '../verificador_de_idade/images/mcrianca.png');// Criança
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', '../verificador_de_idade/images/madole.png');// adolescente
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', '../verificador_de_idade/images/mjovem.png');// Adulto
            } else if (idade >= 60) {
                img.setAttribute('src', '../verificador_de_idade/images/midosa.png');// idoso
            }
        };
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos de idade.`;
        res.appendChild(img)
    };
};
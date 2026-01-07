const fighterButtons = document.querySelectorAll(".fighter-button");
const fighterPortrait = document.getElementById("fighter-portrait")
const questions = document.querySelectorAll(".question")
const answers = document.querySelectorAll(".answer")
const defaultFighter = 'bandeira'
const defaultQuestions = 'pro-questions'

questions.forEach((question, index) => {
            question.textContent=interviewContent[defaultQuestions]
            answers[index].innerHTML=interviewContent[defaultFighter]["answers"];
})

async function changeFighter(event) {
    const portraitPath = `images/${event.currentTarget.id}.jpg`;
    const audio = new Audio("sounds/vgmenuselect.ogg");
    const newQuestions = interviewContent[event.currentTarget.dataset.questions]
    const newAnswers = interviewContent[event.currentTarget.id]["answers"]
    fighterPortrait.classList.remove('fighter-portrait-animate');
    
    fighterPortrait.style.transition = 'none';
    fighterPortrait.classList.remove('fighter-portrait-animate')

    setTimeout(() => {
        fighterPortrait.style.transition = '';
        fighterPortrait.src = portraitPath;
        fighterPortrait.offsetHeight;
        fighterPortrait.classList.add('fighter-portrait-animate');
        
        questions.forEach((question, index) => {
            question.textContent=newQuestions[index];
            answers[index].innerHTML=newAnswers[index];
        }
    )
        audio.play();
    }, 10);
}

function changePreview(event) {
    console.log(event.currentTarget.id)
}

fighterButtons.forEach(button => {
    button.style.backgroundImage=`url(images/${button.id}.jpg)`
    button.addEventListener("click", changeFighter);
    button.addEventListener("mouseover", changePreview)
})

const interviewContent = {
    "bandeira":{
        "data": [
            "Jorge Bandeira",
            "Bandeirartes3D",
            "Escultor 3D"
        ],
        "answers": [
            "A vontade que tivemos de criar jogos veio do nosso contato com\
            boardgames e RPGs, e aí a gente teve a oportunidade de participar\
            de um programa chamado ateliê lúdico, realizado pelo Centro de\
            Design do Ceará, na região do Cariri. A partir dele, e então nos\
            especializamos como um estúdio de jogos, pois a gente é uma empresa\
            de produção de impressão, modelagem e finalização 3D, então já\
            dominamos os meios de produção.",
            "Nós percebemos que as peças dos boardgames que tínhamos aqui não eram\
            coloridas, então fomos procurar como fazer para pintá-las. A partir daí,\
            começamos a pintar nossas peças e colocar as fotos em grupos na internet.\
            Então começamos a receber encomendas de colegas pra fazer essas pinturas\
            de jogos. Em 2016, conseguimos comprar nossa primeira impressora 3D e\
            com o tempo fomos investindo em capacitações. Nesta ultima capacitação\
            conseguimos criar o Sertron, que está com data de lançamento prevista\
            para o primeiro semestre de 2026.",
            "O Sertron trás questões culturais do nordeste, como os cangaceiros e a\
            sobrevivencia em um clima inóspito, fazendo uso da nossa historia e folclore como\
            fonte de histórias fantásticas, com seus próprios ícones, acontecimentos e estética,\
            procurando sempre valorizar o povo nordestino, que quebra barreiras mesmo diante\
            de muitas dificuldades. Tudo isso se passando em um sertão punk, onde a tecnologia\
            é alta mas a qualidade de vida continua baixa, ambiente onde são explorados temas\
            de transhumanismo e meio ambiente.",
            "Sim. Este ano participamos do PAKU Chibi e outro evento de boardgame aqui na\
            região do Cariri, e pretendemos participar de todos os eventos os quais tivermos\
            a oportunidade, tanto aqui no Cariri quanto em Fortaleza. Os eventos são uma\
            ótima oportunidade para refinar o jogo, pois neles podemos escutar o que as\
            pessoas têm para falar dele, inclusive, por ter nascido já dentro de uma\
            comunidade que é fã de jogos como ele, o Sertron é um jogo que desde o começo\
            desenvolvemos escutando outras pessoas.",
            "Achar que pode sair confiando em qualquer curso por aí. Muitas pessoas vendem\
            capacitações de baixa qualidade. Desenvolvimento tecnológico é uma pauta\
            valiosa na nossa atualidade, mas muitos se aproveitam disso para passar uma\
            falsa ideia do mercado. É bom pesquisar avaliações sobre algum curso no lugar\
            de simplesmente acreditar em promessas.",
            "Assim como em todas as outras áreas, eu sinto que nós nordestinos temos que\
            ser muito melhores em tudo para conquistar sequer um pouco de visibilidade.\
            Eu também vejo muito essas questões pois estamos criando um produto que carrega\
            nossa cultura. Já mostramos o Sertron em grupos brasileiros e algumas pessoas\
            fizeram piadas sem graça com a “nordestinidade” dele. Temos que entrar e tudo já\
            provando que o nosso produto tem história e qualidade.",
            "Faz toda a diferença. A associação que fazemos parte, a Ascende Jogos, tem o foco\
            de desenvolver o setor de jogos na nossa região. Através dela que tivemos a\
            oportunidade de participar do SEBRAE developers, e lá recebemos mentorias de grandes\
            nomes da indústria de jogos totalmente de graça. Tudo isso faz parte do Plano Setorial\
            de Jogos, inclusive o Ceará é o único estado que tem um documento oficial para a área.\
            A comunidade é de vital importância por causa da questão do planejamento e conhecimento\
            compartilhado.",
            "Pelo menos falando no curto prazo, afetou pra caramba. A IA consegue fazer o\
            trabalho de um concept artist, aquele artista que cria os personagens com base\
            nas referências e ideias do jogo, então já afetou o mercado dos artistas 2D.\
            Também afetou nossa empresa de 3D, pois as pessoas estão gerando personagens\
            3D a partir de prompts ou imagens, então para os modeladores que focavam em\
            pegar uma grande quantidade de demandas mais simples, essa estratégia não\
            funciona mais.",
            "Sigam nossas 2 páginas no Instagram!<br>\
            <a href=\"https://www.instagram.com/bandeirartes3d\">https://www.instagram.com/bandeirartes3d\</a><br>\
            <a href=\"https://www.instagram.com/sertrons\">https://www.instagram.com/sertrons</a>",
            "Estudem bastante, hoje em dia existem muitos recursos na internet na nossa\
            língua. Na nossa época era tudo em inglês, a gente tinha que se virar. Pesquisem\
            bastante, procurem de que formas você pode atuar na indústria, vão atrás de\
            capacitações, em Fortaleza existem formações voltadas para a área de jogos, e\
            também existem ações do CVT Fortaleza boas para iniciantes, e depois dela você\
            pode investir em mais capacitações em cursos online ou presenciais. Também façam\
            amizades com pessoas do ramo e participem dos eventos!"
        ]},
    "natan":{
        "data": [
            "Natan Maia",
            "N/A",
            "Programador"
        ],
        "answers": [
            "Pra mim foi um processo natural, eu sempre gostei de brinquedos e fazer \"jogos\"\
            com papel e dados, depois eu joguei vários sandboxes tipo Minecraft, comecei a fazer\
            mods pra eles, e daí fazer jogos do zero não foi um pulo grande. Eu ainda brinco de\
            fazer jogos analógicos com cartas e dados também.",
            "De inspirações, é difícil dizer, mas eu tenho muito respeito pelo Will Wright, por\
            trás de jogos tipo Sim City, The Sims, Spore etc, e a mentalidade dele de fazer\
            brinquedos digitais.",
            "Eu adoraria, especialmente pois eu dou muito valor em trabalhar em equipe. Mas\
            abrir meu próprio pequeno negócio é assustador e as maiores empresas AAA não parecem\
            ser bons ambientes de trabalho esses dias.",
            "Eu “trapaceio” um pouco porque como programador eu uso parte do meu tempo de lazer\
            pra pesquisa e desenvolvimento de projetos, então seria, por exemplo, no lugar do\
            tempo que eu estaria jogando Minecraft. As vezes eu tiro um final de semana inteiro\
            pra focar numa feature difícil.",
            "Eu acho que o custo de fazer jogos digitais é subestimado. Se a tua equipe tem só\
            6 pessoas recebendo dois salários mínimos cada, um ano de projeto custa ~200 mil,\
            cinco anos de projeto custam 1 milhão de reais, só em salários. Ainda tem custo de\
            aluguel e manutenção se tiver um escritório, custo de assets e licenças, marketing\
            etc.",
            "Eu não estou muito presente na comunidade então eu posso comentar pouco, mas eu\
            acho que as reuniões mensais que o pessoal faz são incentivo pra mim terminar uma\
            build ou um protótipo pra pegar feedback, que eu não teria em outro lugar.",
            "Daqui do Ceará eu estou esperando o lançamento do RoadOut, que é bem na minha praia,\
            meio zeldinha, meio corrida.",
            "Pra projetos comerciais eu acredito fortemente que o uso deve ser declarado (como na\
            Steam), mas incerto quanto aos detalhes do que precisa ser declarado. Eu não tenho\
            opiniões fortes fora refletir o que o resto dos consumidores opina, especialmente sobre\
            assets feios e tals, mas até aí tem jogos tipo Noobs Are Coming que tem visuais de IA e\
            nenhuma das milhares de reviews parece dar bola. Eu vejo código generativo como já\
            normalizado (a empresa não-gamedev em que eu trabalho usa com alguma frequência).\
            Eu não uso assets ou escrita generativa nos meus projetos, mais por não gostar do tom\
            mesmo. Também são uma ótima desculpa pra ou fazer um projeto que não precise de\
            ilustrações lindas ou história detalhada, ou procurar algum colega de equipe na\
            comunidade pra lidar com essas coisas.",
            "Sem contato com mais ninguém eu veria algum curso (pago, provavelmente) com algum\
            projeto final. Eu me virei com video tutoriais gratuitos online mas eu sei que não é\
            pra todo mundo. Daí, entrar em game jams, eu acho.",
            "Os meus jogos em maioria estão nesse link da itch: <a href=\"https://nate-the-bard.itch.io\">https://nate-the-bard.itch.io</a><br>\
            eu também tenho redes sociais e um blog/portfólio linkados nessa página mas eu não\
            posto com frequência.",
            "Mesmo que você não queira trabalhar com ninguém, eu acho super importante ter um\
            grupo de colegas ou um fórum ou servidor discord pra compartilhar progresso, pegar\
            feedback, etc, em essência ter gente pra conviver enquanto dev e meio que fazer uma\
            jornada junto."
        ]},
    "rayanne": {
        "data": [
            "Rayanne Reveg",
            "Business Development",
            "Studio 85/Studio Bravika"
        ],
        "answers": [
            "Minha família sempre me estimulou criativamente, e quando fui para o direito,\
            não me identifiquei muito por ser uma área muito restritiva em termos de expressão\
            criativa, então quando um amigo meu começou a cursar desenvolvimento de jogos, ele\
            me convenceu a migrar, mas desejo de desenvolver realmente apareceu quando eu conheci\
            pessoas chave, como o Vinicius Lima e o Ismael Maciel meus sócios e co-fundadores do\
            Studio 85 e do Studio Bravika, o Daniel Emanuel e outros. Dentro do gamedev, uma das\
            minhas inspirações é o Mark Venturelli, o CEO da Rogue Snail, por ser um desenvolvedor\
            nordestino e ter alcançado tantas coisas.",
            "Minha especialidade é business development, mas como uma empreendedora, tive que\
            aprender a ser multidisciplinar. Também atuo como artista 2D e 3D e trabalho com os\
            artistas de ambos os estúdios que participo. O Studio 85 surgiu de um convite do\
            Vinicius Lima para a Game Jam Plus de 2019. Nós estávamos fazendo o mesmo curso,\
            mas como ele era de outro semestre não interagiamos muito, até que ele viu meu\
            portfolio e me chamou para fazer a jam. A Game Jam Plus tem o diferencial de\
            incentivar cada equipe a pensar no próprio jogo como produto, e como há falta\
            de oportunidades de fazer parte de empresas já existentes, especialmente para\
            meus parceiros, que vieram da periferia, surgiu a ideia do Studio 85. O Studio\
            Bravika também surgiu da ideia de criar novas oportunidades.",
            "um projeto que eu gosto do Studio Bravika é o Heróis do Ceará. Ele é um space\
            shooter vertical com elementos de Vampire Survivor, onde você usa figuras históricas\
            cearenses para controlar naves espaciais e lutar contra alienígenas em uma Quixadá\
            futurista.",
            "existem! Ano que vem o cronograma está cheio. Não posso dizer quais eventos são ainda,\
            mas vocês podem ficar de olho nas nossas redes sociais.",
            "A ideia de que todo desenvolvedor de jogos passa um montão de tempo jogando videogames.\
            Na verdade, o desenvolvimento de jogos demora muito e acabamos ficando sem tempo para\
            jogar tanto. Inclusive mesmo quando eu vou jogar por diversão, eu estou sempre\
            parcialmente estudando, seja uma mecânica ou estética, eu estou sempre olhando\
            para o jogo como uma desenvolvedora.",
            "o acesso a eventos, certos tipos de conhecimento, e até mesmo a dev kits. Pra\
            contextualizar, nós já fomos representar a America Latina em um evento de jogos na\
            Suécia, e nos tornamos top 10 global, mas não conseguimos recursos para a viagem,\
            foi tudo do nosso bolso. Em 2024 aconteceu a mesma coisa, fomos para Singapura na\
            Gamescom Ásia representar as Américas na Pitch Competition, fomos finalistas, mas\
            tivemos que pagar todas as despesas nós mesmos também. Outra dificuldade é a falta\
            de programas que estimulem o desenvolvimento não apenas de jogos, mas da língua.\
            Apesar de hoje em dia muitos acreditarem que a língua inglesa é de fácil acesso,\
            muitas pessoas não tem esse acesso. Fui privilegiada pois minha bisavó teve a\
            iniciativa de me fazer aprender inglês, mas muitos não tiveram a mesma sorte e\
            são barrados de uma grande quantidade de conhecimento.",
            "É uma diferença muito grande. Em uma comunidade forte, cada um sabe o que nós\
            passamos e buscamos, então cada um pode tanto receber quanto contribuir melhor.",
            "Por um lado, algumas empresas estão usando a IA como uma ferramenta, mas por outro\
            ela também está sendo usada para substituir trabalhadores, e eu acho isso um grande\
            erro, pois não tem como a IA substituir 100% o trabalho de um profissional que luta\
            para se especializar, mas eu seria hipócrita se dissesse que você não deveria usar IA\
            em nenhum processo. Em alguns casos, a IA pode se tornar uma ferramenta de apoio. Por\
            exemplo, nós desenvolvedores indie temos dificuldade em trabalhar com localização,\
            pois não temos tanto recursos financeiros para fazer uma tradução com profissionais.\
            Uma ferramenta de IA pode ser uma opção a primeiro momento, e quando o jogo conquista\
            a comunidade, membros dela poderiam participar deste processo.",
            "Sim, adoraria essa visibilidade!<br>\
            <a href=\"https://www.instagram.com/studiobravika/\">https://www.instagram.com/studiobravika/</a><br>\
            <a href=\"https://www.tiktok.com/@studiobravika\">https://www.tiktok.com/@studiobravika</a><br>\
            <a href=\"https://www.linkedin.com/company/studiobravika/\">https://www.linkedin.com/company/studiobravika/</a>",
            "Não foque numa área específica logo de início, aprenda um pouco de tudo para poder melhorar\
            sua comunicação com o resto da equipe, só então se especialize. Também não tenha o ego\
            inflado e esteja aberto a feedback!Além disso, comece pequeno. Não tente fazer o próximo\
            GTA ou Final Fantasy."
        ]},
    "barreto": {
        "data": [
        "Luiz Barreto",
        "Produtor/Game Designer",
        "Rebuild Studio"
        ],
        "answers": [
            "Eu comecei com aquela indecisão da escola, em que a gente não sabe o que quer\
            fazer, só sabe do que a gente gosta. Procurando trabalhar com algo relacionado a\
            jogos, tentei fazer engenharia da computação mas vi que o direcionamento era outro,\
            então fui para um curso de Desenvolvimento de Jogos mesmo. Minha parte favorita do\
            desenvolvimento de jogos é pensar em interações e mecânicas únicas, e nesse sentido,\
            minha principal inspiração é o Tim Schafer, fundador da Double Fine Studios,\
            responsável pelo Grim Fandango e Psychonauts",
            "Como co-fundador eu tenho responsabilidade pelo planejamento e execução dos\
            projetos, e no planejamento da empresa como um todo. Acabei por necessidade tendo\
            que aprender de business development, preparando pitches, lidando com publicadoras\
            e possíveis parceiros, mas na parte do desenvolvimento em si eu trabalho mais como\
            produtor e game designer.",
            "vou falar do Fortal Step, que começou com o décimo terceiro ou décimo segundo\
            Edital Das Artes. Ele é um jogo que mistura RPG de turnos com ritmo, imagina que\
            você é um dançarino de break dance, só que no lugar de apenas dançar, a cada\
            cambalhota ou giro você solta uma rajada de poder, quase como se fosse um anime de\
            lutas. Nós até trazemos a questão do duelo de personalidade na forma de provocações\
            com rimas do break dance numa mecânica de enxame, onde frescar com a cara do seu\
            oponente pode fazer ele errar o movimento. Já temos uma versão jogável do Fortal\
            Step no itch.io:<br><a href=\"https://pedro-gustavo-pgzim.itch.io/fortalstep\">\
            https://pedro-gustavo-pgzim.itch.io/fortalstep</a>.",
            "Tanto no nosso site quanto no Instagram, mas nós estamos sempre disponíveis pra\
            participar dos eventos da comunidade. Tentamos estar na maioria dos FINDs (Fortaleza\
            Indie Games), nós expomos na Feira do Conhecimento. Todo evento em que pode mostrar\
            jogos independentes, nós tentamos estar lá.",
            "Que você pode ir logo fazendo o próximo GTA. O melhor jogo que você faz é o melhor\
            jogo que você pode fazer. Exagerar no escopo pode te afastar daquilo que você pode\
            aprender, exercite sua criatividade, pense no design do jogo de maneira criativa,\
            mas seja criativo em relação ao seus recursos também, pois você não é dono de uma\
            empresa gigantesca com bilhões de dólares para investir no seu jogo, e o seu tempo\
            é o seu “dinheiro”. Se você é um estudante, por exemplo, o seu tempo poderia ser\
            gasto estudando para uma matéria, então é importante começar dando passos pequenos\
            e ir ampliando o escopo de seus projetos gradualmente.",
            "Dá pra falar de três aspectos. Primeiro, o de educação: É muito difícil achar\
            educação profissionalizante de qualidade para a área, a maioria dos cursos não vai\
            te preparar tão bem quanto o necessário. Em contrapartida, acho que tem muitas\
            iniciativas boas aqui no Ceará, como o instituto Bojogá e os cursos do CVT (Centro\
            Vocacional Tecnológico), que tem professores super bacanas e com experiência de\
            mercado.<br>\
            O segundo aspecto é a comunidade. Nós temos uma comunidade muito rachada e muito\
            nichada, às vezes é muito difícil conectar desenvolvedores iniciantes com aqueles\
            que têm mais experiência, isso acaba transformando o cenário de desenvolvimento de\
            jogos em uma panelinha. A questão da educação é mais difícil, mas neste problema,\
            não dependemos de ninguém, e nesse sentido é bom mencionar a importância do Fórum\
            de Jogos do Ceará e o IGDA para enfrentá-lo.<br>\
            A terceira dificuldade é a ausência de investimento, que é muito difícil conseguir\
            no Brasil. Na minha experiência, as publishers brasileiras são muito mais focadas\
            no marketing do que no investimento para o desenvolvimento, e também estamos em uma\
            época que está muito difícil conseguir interesse das publishers internacionais,\
            mas um ponto de luz são os editais da lei Paulo Gustavo e o Hub de Jogos do Ceará.",
            "Eu acho que é essencial ter mais engajamento. Toda vida que há um evento de jogos,\
            eu quero que todos venham, comentem, que eles digam o que acharam legal, e o que não\
            acharam tão legal também, isso me ajuda como desenvolvedor, e eu quero ver o que\
            eles estão criando e fazer o mesmo por eles também. Eu acho que essa troca é o que\
            mantém o nosso senso de união, e essa união é importante para quem está começando\
            a desenvolver jogos, pois o contato ajuda a aumentar o nível da área e gerar novas\
            oportunidades para todos no futuro. Até mesmo se você for apenas um entusiasta e\
            não um desenvolvedor, participe, pois não adianta se não tivermos tração, se não\
            seria uma coisa temporária, passariam dois, três anos havendo editais, e depois a\
            gente ficaria insignificante de novo.",
            "A influência das IAs é uma infelicidade tremenda para o desenvolvimento de jogos.\
            Nós, desenvolvedores que já passamos por uma penca de dificuldades para desenvolver\
            projetos e conseguir investimento, termos mais isso como dificuldade é muito triste.\
            Isso abrange vários campos da sociedade, as pessoas estão cada vez mais acostumadas\
            a fazer menos esforço, e quem investe vai querer gastar cada vez menos dinheiro e\
            automatizar tudo o máximo possível. Pessoalmente eu evito o máximo possível a IA,\
            as vezes é legal um apoio para organizar um documento em tópicos, mas até isso eu\
            faço com uma dor no coração, pois é algo que eu consigo fazer. Eu acho que tem\
            algumas utilidades, mas não acho que vai salvar ninguém no nosso cenário ou em\
            qualquer contexto de desenvolvimento de jogos. Eu acho que o game dev é algo que\
            você realmente tem que dar a cara tapa e ir pelo \“grind\”.",
            "temos o nosso site, o instagram tiktok e twitter, mas o lugar onde somos mais\
            ativos é o Instagram mesmo.",
            "Estejam presentes nos eventos e se façam conhecidos, digam suas experiências mesmo\
            que você não tenha tantas assim. “Ah, eu estou fazendo tal coisa em Godot”, pô, se\
            você viesse e me dissesse algo assim eu iria querer saber mais sobre, e isso se\
            torna um networking, se de repente um dia eu trabalhar em algo em Godot pode ser\
            que eu te chame, por exemplo. O Fórum de Jogos do Ceará é uma maneira de estar\
            ciente desses eventos, e a comunidade do IGDA é bem unida no sentido de tentar\
            fazer todo mundo crescer junto, então esses são dois lugares bons de se participar."
        ]},
    "pro-questions": [
        "O que te levou a sonhar em desenvolver jogos? Quais são suas maiores\
        inspirações como game dev?",
        "Qual a sua especialidade no estúdio onde você trabalha? Como você criou ele?",
        "Pode falar um pouco sobre algum projeto em que você está trabalhando no\
        momento?",
        "Existem planos para exibir o projeto em alguma exposição ou evento próximo?",
        "O que é uma concepção comum sobre o desenvolvimento de jogos que na realidade\
        é um mito?",
        "Como um game dev brasileiro, quais são as maiores dificuldades em relação ao\
        desenvolvimento de jogos no país ao seu ver?",
        "Que diferença você acha que faz uma comunidade regional forte para o\
        desenvolvedor independente?",
        "A IA generativa surgiu e modificou severamente o estado de diversos ramos\
        profissionais. Como você sente que o desenvolvimento de jogos foi afetado\
        e qual a sua postura em relação a isso?",
        "De que maneira podemos ficar por dentro do seu trabalho e do trabalho do seu\
        estúdio?",
        "Algum conselho para quem deseja começar a trabalhar com jogos no Ceará?"
    ],
    "hobby-questions": [
        "O que te levou a querer desenvolver jogos? Quais são suas maiores\
        inspirações como game dev?",
        "Deseja trabalhar na indústria profissionalmente um dia, ou quer\
        apenas ficar como hobbysta?",
        "Como você equilibra as responsabilidades do dia-a-dia com o hobby?",
        "O que é uma concepção comum sobre desenvolvimento de jogos que na\
        verdade é um mito?",
        "De que maneira a existência de uma comunidade ativa afeta sua\
        experiência como desenvolvedor de jogos amador?",
        "Há algum projeto regional que lançou recentemente ou que está em\
        desenvolvimento que tem seu interesse no momento?",
        "Qual a sua postura sobre o uso de inteligência artificial generativa\
        em projetos amadores? Ela é a mesma ou diferente em relação ao mesmo\
        tema só que para jogos comerciais?",
        "Como você aprenderia a desenvolver jogos se tivesse que recomeçar do zero?",
        "De que maneira podemos acompanhar o seu trabalho? Há alguma página ou link\
        que gostaria de divulgar?",
        "Algum conselho para quem deseja começar a desenvolver jogos não-profissionalmente?"
    ]
}

questions.forEach((question, index) => {
    question.textContent=interviewContent[defaultQuestions][index];
    answers[index].innerHTML=interviewContent[defaultFighter][index];
})
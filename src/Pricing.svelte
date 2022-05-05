<svelte:options accessors={true} />

<script>
    import Column from './Column.svelte'
    let userLang = navigator.language || navigator.userLanguage; 
    let column_data = {
        plan: "Choose the plan that’s right for you.",
        free: { 
                class: "github", 
                name: "Github", 
                name_desc: "Pls check github repo and port 9669"
        },
        a: {
            name: "Free forever",
            name_desc: "The basics for individual and organizations",
            features: [
                {n:"Community suport",desc:"wykop,telegram,discord,reddit"},
                {n:"10MB storage",desc:"no desc"},
                {n:"Web3 - IPFS ready",desc:"All content in one HTML file"},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""}
            ],
            price: {
                amount:"0",
                currency: "$",
                desc: "per year"
            },
            btn_desc: "Get started",
            btn_url: "/login"
        },
        b: {
            class: "team",
            name: "Team",
            name_desc: "Collaboration team",
            features: [
                {n:"Everything included in Free",desc:"no desc"},
                {n:"<strong>Multiplayer</strong>",desc:"Goolang SSE API"},
                {n:"db storage",desc:"For loading and saving code and\nfor store events and analyse progress"},
                {n:"Custom groups",desc:"Just custom url"},
                {n:"Shared links",desc:"For multiplayer make special shared links with invitation"},
                {n:"500MB storage",desc:"no desc"},
                {n:"Fast servers",desc:"no desc"},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""}
            ],
            price: {
                amount: "3",
                currency: "$",
                desc: "per year",
            },
            btn_desc: "Continue with Team",
            btn_url: "/join?amount=3&currency=dollar"
        },
        c: {
            class: "enterprise",
            name: "Enterprise",
            // name_desc: "Custom builds for advertisment",
            name_desc: "In progress ...",
            features: [
                {n:"Everything included in Team",desc:"no desc"}, 
                {n:"Premium support",desc:"no desc"}, 
                {n:"Subdomain",desc:"no desc"},
                {n:"Private urls",desc:"Private means - sign up to see"},
                {n:"5GB storage",desc:"no desc"},
                {n:"Scaning Tools;",desc:"A Front End simple app or python && gollang scanning bots"},
                {n:"API",desc:"Python and GOLANG library with Swagger docs"},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""}

            ],
            price: {
                amount: "25",
                currency: "$",
                desc: "per month",
            },
            btn_desc: "Continue with Enterprise",
            btn_url: "/join?amount=25&currency=dollar"
        }
    }
    if (userLang === 'pl-PL') {
        column_data = {
        plan: "Wybierz pakiet, który Ci odpowiada.",
        free: { 
            class: "github", 
            name: "Github", 
            name_desc: "Sprawdź proszę repozytorium Github i port 9669"
        },
        a: {
            name: "Zawsze darmowe",
            name_desc: "Podstawowe konto dla osób indywidualnych i organizacji",
            features: [
                {n:"Wsparcie społeczności",desc:"wykop,telegram,discord,reddit"},
                {n:"10MB storage",desc:"no desc"},
                {n:"Web3 - IPFS ready",desc:"Cała treść w jednym pliku HTML"},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""}
            ],
            price: {
                amount:"0",
                currency: "zł",
                desc: "za rok"
            },
            btn_desc: "Rozpocznij",
            btn_url: "/login"
        },
        b: {
            class: "team",
            name: "Zespół",
            name_desc: "Zoorganizowana grupa",
            features: [
                {n:"Everything included in Free",desc:"no desc"},
                {n:"<strong>Tryb wieloosobowy</strong>",desc:"Goolang SSE API"},
                {n:"Baza danych",desc:"Baza danych do zapisu kodu oraz\nprzechowywania zdarzeń;analiza postępu"},
                {n:"Grupy",desc:"Grupowanie danych po adresach"},
                {n:"Współdzielone linki",desc:"For multiplayer make special shared links with invitation"},
                {n:"500MB danych",desc:"no desc"},
                {n:"Szybki serwer",desc:"no desc"},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""}
            ],
            price: {
                amount: "12",
                currency: "zł",
                desc: "za rok",
            },
            btn_desc: "Kontynuuj z grupą",
            btn_url: "/join?amount=12&currency=zl"
        },
        c: {
            class: "enterprise",
            name: "Firmowe",
            // name_desc: "Custom builds for advertisment",
            name_desc: "In progress ...",
            features: [
                {n:"Everything included in Team",desc:"no desc"}, 
                {n:"Premium support",desc:"no desc"}, 
                {n:"Subdomain",desc:"no desc"},
                {n:"Private urls",desc:"Private means - sign up to see"},
                {n:"5GB storage",desc:"no desc"},
                {n:"Scaning Tools;",desc:"A Front End simple app or python && gollang scanning bots"},
                {n:"API",desc:"Python and GOLANG library with Swagger docs"},
                {n:"&nbsp;",desc:""},
                {n:"&nbsp;",desc:""}

            ],
            price: {
                amount: "99",
                currency: "zł",
                desc: "za miesiąc",
            },
            btn_desc: "Kontynuuj Firmowe",
            btn_url: "/join?amount=99&currency=zl"
        }
    }
    }
</script>
<div class="pricing-wrapper">
    <h1>{column_data.plan}</h1>
    <pricing-box class="pricing">
        <Column data={column_data.free}></Column>
        <Column data={column_data.a}></Column>
        <Column data={column_data.b}></Column>
        <Column data={column_data.c}></Column>
    </pricing-box>
</div>

<style>
    h1 {text-align: center;color:#333; font-family: 'Helvetica Neue', monospace;font-weight: 200;
    background: url("data:image/svg+xml,<svg id='phpStroke' width='4' height='4' xmlns='http://www.w3.org/2000/svg'><path stroke-width='.1' stroke='hsla(147,80%,61%,1)' d='M 0,0 4,4 M 0,4 4,0'/></svg>"), linear-gradient(90rad,rgb(34, 193, 200),#db163e);
    background-clip: text;
    -webkit-background-clip: text;
    color:transparent;

}
    .pricing {
        display: flex;
        justify-content: center;
    }
    
    @media only screen and (max-width: 480px) {
        .pricing {display: block;}
    }
</style>
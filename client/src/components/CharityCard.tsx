import '../styles/components/CharityCard.scss'




interface Charity {
    slug: string;
    title: string;
    category: string;
    reachedAmount: number;
    logo: string;
    summary : {
        reachedAmount: number;
    }

}

export const CharityCard = ({ charity }: { charity: Charity }) => {

    return (
        <div className="charity-card" onClick={()=>{window.open(`https://dev.podkrepi.bg/campaigns/${charity.slug}`)}}>
            <div className="image-container">
                <img src={charity.logo} alt="" />
            </div>
            <div className="info-container">
                <h1 className="charity-heading">{charity.title}</h1>
                <p className="donated-amount">{charity.summary.reachedAmount}€</p>
            </div>
        </div>
    )
}
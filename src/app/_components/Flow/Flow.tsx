import { Search, CheckCircle, ShoppingCart, Users, Smile, DollarSign } from "lucide-react"
import classes from './index.module.scss'


const steps = [
    {
        icon: Search,
        title: "Find Unsold Items",
        description: "I look for items in IITK buy & sell WhatsApp group that remain unsold."
    },
    {
        icon: CheckCircle,
        title: "Verify Quality",
        description: "I personally check the item to ensure it’s in good condition."
    },
    {
        icon: ShoppingCart,
        title: "List on Website",
        description: "Item is listed on my website at a lower price than before."
    },
    {
        icon: Users,
        title: "Connect Buyer & Seller",
        description: "Interested buyers can check details and connect easily."
    },
    {
        icon: DollarSign,
        title: "Earn Profit",
        description: "I keep a margin of 10–20% for each successful deal."
    },
    {
        icon: Smile,
        title: "Happy Users",
        description: "They found exactly what they were looking for."
    }

]

export default function Flow() {
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.heading}>How Our Business Works</h2>
            <div className={classes.grid}>
                {steps.map((step, index) => (
                    <div key={index} className={classes.card}>
                        <div className={classes.icon}>
                            <step.icon size={40} color={"black"} />
                        </div>
                        <h3 className={classes.title}>{step.title}</h3>
                        <p className={classes.description}>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

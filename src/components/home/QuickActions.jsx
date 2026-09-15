
import { quickActions } from "../../data/quickActions";
import QuickActionCard from "./QuickActionCard";

function QuickActions() {
  return (
    <section className="quick-actions">
      {quickActions.map((action) => (
        <QuickActionCard
          key={action.title}
          title={action.title}
          href={action.href}
          iconKey={action.iconKey}
          external={action.external}
        />
      ))}
    </section>
  );
}

export default QuickActions;

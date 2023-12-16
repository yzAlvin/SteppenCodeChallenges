WITH order_aggregate AS (
  SELECT 
  oli.order_id,
  c.customer_id,
  EXTRACT(YEAR FROM o.ordered_at) AS year,
  EXTRACT(MONTH FROM o.ordered_at) AS month,
  SUM(oli.unit_price * oli.quantity) AS order_value
  FROM order_line_items oli
  JOIN orders o ON o.order_id=oli.order_id
  JOIN customers c ON c.customer_id=o.customer_id
  GROUP BY o.ordered_at, c.customer_id, oli.order_id
), ranked_orders AS (
  SELECT 
  order_aggregate.year,
  order_aggregate.month,
  order_aggregate.customer_id,
  ROW_NUMBER() OVER (PARTITION BY year, month ORDER BY order_value DESC, customer_id) AS rank,
  order_aggregate.order_value
  FROM order_aggregate
)

SELECT
year,
month,
customer_id,
order_value AS total_monthly_order_value
FROM ranked_orders
WHERE ranked_orders.rank = 1;
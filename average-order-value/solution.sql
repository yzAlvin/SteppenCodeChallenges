SELECT 
name, 
num_orders, 
total_order_value, 
total_order_value / num_orders AS avg_order_value
FROM (
  SELECT 
  c.name AS name, 
  COUNT(DISTINCT o.order_id) AS num_orders, 
  SUM(oli.unit_price * oli.quantity) AS total_order_value
  FROM customers c
  JOIN orders o ON o.customer_id=c.customer_id
  JOIN order_line_items oli ON oli.order_id=o.order_id
  JOIN products p ON p.product_id=oli.product_id
  GROUP BY c.name
) report
ORDER BY avg_order_value DESC;

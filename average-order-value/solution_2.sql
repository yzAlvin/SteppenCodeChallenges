SELECT 
c.name, 
count(order_id), 
sum(total_order_value), 
avg(total_order_value)
FROM (
  SELECT 
  o.customer_id,
  o.order_id,
  SUM(oli.unit_price * oli.quantity) AS total_order_value
  FROM customers c
  JOIN orders o ON o.customer_id=c.customer_id
  JOIN order_line_items oli ON oli.order_id=o.order_id
  JOIN products p ON p.product_id=oli.product_id
  GROUP BY o.order_id
 ) order_aggregate
 JOIN customers c ON c.customer_id=order_aggregate.customer_id
 GROUP BY c.name


const PortfolioStats = () => {
  return (
    <div className="portfolio-stats-container">
      
      <div className="portfolio-overview">
        
        <div className="">
          <h2>$20.00</h2>
          <span>+US1.00(24h)</span>
        </div>
        
        <div className="">
          <h1>+2%</h1>
        </div>
      </div>

      <div className="portfolio-stats">
        
        <div className="portfolio-stats-chart">
          Chart
        </div>

        <div className="portfolio-stats-values">

          <div className="total-change">
            <p>Total Profit/Loss</p>
          </div>

          <div className="sub-stats">

            <div className="sub-stats-best">
              <p>Best Performance</p>
            </div>

            <div className="sub-stats-worst">
              <p>Worst Performance</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default PortfolioStats
function applyCustomStyles() {
  const styles = `
    /* Location dashboard wrapper */
    #location-dashboard .location-dashboard-wrapper {
      background-color: #000000;
    }

    /* Division */
    .location-dashboard-wrapper .n-config-provider .w-vw {
      background-color: #000000;
    }

    /* Title */
    .hl-header .title {
      color: #f8d748 !important;
      font-weight: 700;
      font-size: 24px;
    }

    /* Navigation */
    #navigation-btn {
      background-color: #4a0982 !important;
    }

    /* Input resizable */
    #location-dashboard_date-picker .n-input--resizable {
      background-color: #4a0982;
    }

    .n-input--resizable .n-input__input input[type="text"] {
      color: #ffffff;
    }

    /* Chart container */
    .grid-stack .crm-opportunities-status .chart-container,
    .grid-stack .crm-opportunities-value .chart-container {
      background-image: linear-gradient(15deg, #000000 48%, #434343 100%);
    }

    /* Custom chart container */
    .grid-stack .crm-opportunities-conversion-rate .custom-chart-container,
    .grid-stack .crm-opportunities-funnel .chart-container,
    .grid-stack .crm-opportunities-stages-distribution .custom-chart-container,
    .grid-stack .grid-stack-item .location-dashboard-task-container,
    .grid-stack .crm-conversations-manual-actions .custom-chart-container,
    .grid-stack .automations-reporting-google-analytics-count-report .custom-chart-container,
    .grid-stack .automations-reporting-gmb-report .custom-chart-container,
    .grid-stack .automations-reporting-facebook-ads-report .custom-chart-container,
    .grid-stack .automations-reporting-google-ads-report .custom-chart-container {
      background-image: linear-gradient(15deg, #000000 48%, #434343 100%);
    }

    /* Location dashboard lead source report */
    .grid-stack .grid-stack-item .location-dashboard-lead-source-report {
      background-color: transparent;
    }

    /* Custom chart container */
    .grid-stack .automations-reporting-google-analytics-chart-report .custom-chart-container {
      background-color: transparent;
    }

    /* Text medium */
    .crm-opportunities-status .truncate .hl-text-md-medium,
    .crm-opportunities-value .truncate .hl-text-md-medium,
    .crm-opportunities-conversion-rate .truncate .hl-text-md-medium,
    .crm-opportunities-funnel .truncate .hl-text-md-medium,
    .crm-opportunities-stages-distribution .truncate .hl-text-md-medium,
    .crm-opportunities-tasks .truncate .hl-text-md-medium,
    .crm-opportunities-manual-actions .truncate .hl-text-md-medium,
    .location-dashboard-lead-source-report .truncate .hl-text-md-medium,
    .automations-reporting-google-analytics-count-report .truncate .hl-text-md-medium,
    .automations-reporting-google-analytics-chart-report .truncate .hl-text-md-medium,
    .automations-reporting-gmb-report .truncate .hl-text-md-medium,
    .automations-reporting-google-ads-report .truncate .hl-text-md-medium {
      background-color: #4a0982;
      padding: 5px 15px;
      border-radius: 15px;
      color: #f7f7f7;
    }
  `;

  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

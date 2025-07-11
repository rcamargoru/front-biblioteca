import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { EstadisticaService } from './estadisticas.service';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticaComponent implements OnInit {
  chartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      { data: [], label: 'Préstamos por mes' }
    ]
  };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true
  };

  constructor(private estadisticaService: EstadisticaService) {}

  ngOnInit(): void {
    this.estadisticaService.getPrestamosPorMes().subscribe(data => {
      this.chartData.labels = data.map(d => d.mes);
      this.chartData.datasets[0].data = data.map(d => d.total);
    });
  }
}
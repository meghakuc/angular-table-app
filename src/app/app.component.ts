import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  displayedColumns: string[] = ['name', 'calories', 'fat', 'carbs', 'protein'];
  dataSource = new MatTableDataSource<Food>(foods);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
	this.dataSource.sort = this.sort;
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface Food {
   calories: number;
   carbs: number;
   fat: number;
   name: string;
   protein: number;
}

const foods: Food[] = [
      {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
      {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
      {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
      {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4},
      {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
      {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
      {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
      {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
      {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 5},
      {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
];
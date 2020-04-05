import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRowComponent } from './post-row.component';

describe('PostRowComponent', () => {
  let component: PostRowComponent;
  let fixture: ComponentFixture<PostRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRowComponent);
    component = fixture.componentInstance;
    component.post = {
      id: 1,
      title: 'Blog post #1',
      author: 'Melissa Manges',
      publish_date: '2016-02-23',
      slug: 'blog-post-1',
      description: 'Utroque denique invenire et has.',
      content: '<p>Utroque denique invenire et has. Cum case definitiones no, est dicit placerat verterem ne.</p> <p>In ius nonumy perfecto adipiscing, ad est cibo iisque aliquid, dicit civibus eum ei. Cum animal suscipit at, utamur utroque appareat sed ex.</p>'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [

        path('products/', views.get_products),
        path('product/<int:id>', views.get_product),
        path('categories/', views.get_categories),
        path('cart/', views.get_cart),
        path('cart/add/', views.add_to_cart),
        path('cart/remove/', views.remove_from_cart),
        path('cart/update/', views.update_cart),
        path('orders/create/', views.create_order),
        
        # JWT Authentication endpoints
        path('auth/login/', views.login_view, name='login'),
        path('auth/register/', views.register_view, name='register'),
        path('auth/logout/', views.logout_view, name='logout'),
        path('auth/profile/', views.profile_view, name='profile'),
        path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
        ]

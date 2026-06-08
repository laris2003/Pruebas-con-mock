package calculadora;

public interface ServicioMatematico {
    int sumar(int a, int b);
    int restar(int a, int b);
    int multiplicar(int a, int b);
    double dividir(int a, int b); // Usamos double por si el resultado tiene decimales
}